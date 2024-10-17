from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from .models import Post, Comment
from rest_framework import viewsets

from .serializers import PostSerializer, CommentSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions for the Post model.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    # Automatically handles create, update, retrieve, and delete


class CommentViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions for the Comment model.
    """

    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Get all comments for a specific post
        post_id = self.kwargs.get("post_id")
        return Comment.objects.filter(post_id=post_id)


class ReplyViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions for Comment replies.
    """

    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Get replies for a specific comment
        comment_id = self.kwargs.get("comment_id")
        return Comment.objects.filter(parent_id=comment_id)
