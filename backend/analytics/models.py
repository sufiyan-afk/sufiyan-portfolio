
from django.db import models


class Visitor(models.Model):
    session_id = models.CharField(max_length=100, unique=True)
    device = models.CharField(max_length=50, blank=True)
    visited_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.session_id


class PageView(models.Model):
    page = models.CharField(max_length=100)
    visited_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.page


class AIRequest(models.Model):
    question = models.TextField()
    response_time = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question[:50]