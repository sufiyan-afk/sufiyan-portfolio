from django.shortcuts import render

# Create your views here.
import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Visitor, PageView


ALLOWED_PAGES = {
    "LinkedIn",
    "GitHub",
    "Email",
}


@csrf_exempt
def track_visitor(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "POST method required."},
            status=405,
        )

    try:
        data = json.loads(request.body or "{}")

        session_id = str(data.get("session_id", "")).strip()
        device = str(data.get("device", "")).strip()[:50]

        if not session_id:
            return JsonResponse(
                {"error": "session_id is required."},
                status=400,
            )

        Visitor.objects.update_or_create(
            session_id=session_id,
            defaults={
                "device": device,
            },
        )

        return JsonResponse(
            {"success": True}
        )

    except (json.JSONDecodeError, TypeError, ValueError):
        return JsonResponse(
            {"error": "Invalid request data."},
            status=400,
        )


@csrf_exempt
def track_page_view(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "POST method required."},
            status=405,
        )

    try:
        data = json.loads(request.body or "{}")

        page = str(data.get("page", "")).strip()

        if page not in ALLOWED_PAGES:
            return JsonResponse(
                {"error": "Invalid page."},
                status=400,
            )

        PageView.objects.create(
            page=page
        )

        return JsonResponse(
            {"success": True}
        )

    except (json.JSONDecodeError, TypeError, ValueError):
        return JsonResponse(
            {"error": "Invalid request data."},
            status=400,
        )