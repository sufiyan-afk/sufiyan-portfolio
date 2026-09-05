from django.contrib import admin
from django.contrib.admin import AdminSite
from django.db.models import Avg, Count
from django.shortcuts import render

from .models import Visitor, PageView, AIRequest


class AnalyticsAdminSite(AdminSite):
    site_header = "Sufiyan Tal Admin"
    site_title = "Sufiyan Tal Admin"
    index_title = "Analytics Dashboard"

    def index(self, request, extra_context=None):

        total_visitors = Visitor.objects.count()
        total_page_views = PageView.objects.count()
        total_ai_requests = AIRequest.objects.count()

        successful_requests = AIRequest.objects.filter(
            status="success"
        ).count()

        failed_requests = AIRequest.objects.filter(
            status="failed"
        ).count()

        avg_response_time = (
            AIRequest.objects
            .filter(response_time__isnull=False)
            .aggregate(avg=Avg("response_time"))["avg"]
            or 0
        )

        # Page analytics
        page_stats = (
            PageView.objects
            .values("page")
            .annotate(total=Count("id"))
            .order_by("-total")
        )

        # Recent activity
        recent_page_views = PageView.objects.order_by(
            "-visited_at"
        )[:8]

        recent_ai_requests = AIRequest.objects.order_by(
            "-created_at"
        )[:8]

        recent_visitors = Visitor.objects.order_by(
            "-visited_at"
        )[:8]

        success_rate = 0

        if total_ai_requests:
            success_rate = round(
                (successful_requests / total_ai_requests) * 100
            )

        context = {
            "total_visitors": total_visitors,
            "total_page_views": total_page_views,
            "total_ai_requests": total_ai_requests,
            "avg_response_time": avg_response_time,

            "successful_requests": successful_requests,
            "failed_requests": failed_requests,
            "success_rate": success_rate,

            "page_stats": page_stats,

            "recent_page_views": recent_page_views,
            "recent_ai_requests": recent_ai_requests,
            "recent_visitors": recent_visitors,
        }

        if extra_context:
            context.update(extra_context)

        return render(
            request,
            "analytics/dashboard.html",
            context
        )


class VisitorAdmin(admin.ModelAdmin):

    list_display = (
        "session_id",
        "device",
        "visited_at",
    )

    search_fields = (
        "session_id",
        "device",
    )

    list_filter = (
        "device",
        "visited_at",
    )

    ordering = ("-visited_at",)


class PageViewAdmin(admin.ModelAdmin):

    list_display = (
        "page",
        "visited_at",
    )

    search_fields = ("page",)

    list_filter = (
        "page",
        "visited_at",
    )

    ordering = ("-visited_at",)


class AIRequestAdmin(admin.ModelAdmin):

    list_display = (
        "question",
        "response_time",
        "status",
        "created_at",
    )

    search_fields = (
        "question",
        "status",
    )

    list_filter = (
        "status",
        "created_at",
    )

    ordering = ("-created_at",)


analytics_admin = AnalyticsAdminSite(
    name="analytics_admin"
)

analytics_admin.register(
    Visitor,
    VisitorAdmin
)

analytics_admin.register(
    PageView,
    PageViewAdmin
)

analytics_admin.register(
    AIRequest,
    AIRequestAdmin
)