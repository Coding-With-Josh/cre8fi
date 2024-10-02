from django.conf import settings
from django.db import models
from datetime import timedelta


class Story(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="stories"
    )
    content = models.TextField(
        max_length=500, blank=True, null=True
    )  # Content of the post
    photo = models.ImageField(
        upload_to="story_photos/", blank=True, null=True
    )  # Photo upload
    video = models.FileField(
        upload_to="story_videos/", blank=True, null=True
    )  # Video upload
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField(editable=False)  # No direct editing of expiration

    def save(self, *args, **kwargs):
        # Set the expires_at field to created_at + 24 hours
        if not self.expires_at:
            self.expires_at = self.created_at + timedelta(hours=24)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.author.username}'s Story"
