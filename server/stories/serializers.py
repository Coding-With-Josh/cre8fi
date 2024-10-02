from rest_framework import serializers
from .models import Story


class StorySerializer(serializers.ModelSerializer):
    expires_at = serializers.SerializerMethodField()

    class Meta:
        model = Story
        fields = [
            "author",
            "content",
            "photo",
            "video",
            "created_at",
            "updated_at",
            "expires_at",
        ]

    def get_expires_at(self, obj):
        # Return the calculated expires_at (created_at + 24 hours)
        return obj.created_at + timedelta(hours=24)

    def perform_create(self, serializer):
        # Automatically set the author to the logged-in user
        serializer.save(author=self.request.user)
