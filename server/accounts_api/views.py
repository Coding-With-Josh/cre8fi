from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .models import CustomUser, UserProfile
from .serializers import FollowSerializer, UserProfileSerializer, UserCreationSerializer
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()  # Queryset for all users
    permission_classes = [IsAuthenticated]  # Require authentication for all actions

    def get_serializer_class(self):
        # Use UserCreationSerializer for create action and UserSerializer for other actions
        if self.action == "create":
            return UserCreationSerializer
        return UserSerializer


class FollowViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def follow_user(self, request, pk=None):
        user_to_follow = CustomUser.objects.get(pk=pk)
        request.user.follow(user_to_follow)
        return Response(
            {"message": "You are now following {}".format(user_to_follow.username)},
            status=status.HTTP_200_OK,
        )

    def unfollow_user(self, request, pk=None):
        user_to_unfollow = CustomUser.objects.get(pk=pk)
        request.user.unfollow(user_to_unfollow)
        return Response(
            {"message": "You have unfollowed {}".format(user_to_unfollow.username)},
            status=status.HTTP_200_OK,
        )

    def list_followers(self, request):
        followers = request.user.get_followers()
        return Response(
            {"followers": [follower.username for follower in followers]},
            status=status.HTTP_200_OK,
        )

    def list_following(self, request):
        following = request.user.get_following()
        return Response(
            {"following": [followed_user.username for followed_user in following]},
            status=status.HTTP_200_OK,
        )


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Return the profile of the authenticated user
        return self.queryset.filter(user=self.request.user)
