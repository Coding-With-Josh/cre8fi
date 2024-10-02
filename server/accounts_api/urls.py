from django.urls import path, include
from rest_framework.routers import DefaultRouter

# from .views import UserRegistrationView  # SuperUserRegistrationView?
from .views import (
    FollowViewSet,
    UserProfileViewSet,
    UserViewSet,
)  # CustomAuthToken
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = DefaultRouter()
router.register(r"profiles", UserProfileViewSet)
router.register(r"users", UserViewSet)


urlpatterns = [
    path("follow/<int:pk>/", FollowViewSet.as_view({"post": "follow_user"})),
    path("unfollow/<int:pk>/", FollowViewSet.as_view({"post": "unfollow_user"})),
    path("followers/", FollowViewSet.as_view({"get": "list_followers"})),
    path("following/", FollowViewSet.as_view({"get": "list_following"})),
    path("", include(router.urls)),
]
