
from django.urls import path

from .views import track_visitor, track_page_view


urlpatterns = [
    path("visitor/", track_visitor, name="track_visitor"),
    path("page-view/", track_page_view, name="track_page_view"),
]