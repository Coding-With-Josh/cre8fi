from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Story
from .serializers import StorySerializer


class StoryViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    for creating, reading, updating, and deleting Story instances.
    """

    queryset = Story.objects.all()
    serializer_class = StorySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Automatically set the author to the logged-in user when creating a story
        serializer.save(author=self.request.user)
