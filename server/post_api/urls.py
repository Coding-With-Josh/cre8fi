from django.urls import path
from .views import PostViewSet, CommentViewSet, ReplyViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"posts", PostViewSet)
router.register(r"posts/(?P<post_id>\d+)/comments", CommentViewSet, basename="comment")
router.register(r"comments/(?P<comment_id>\d+)/replies", ReplyViewSet, basename="reply")

urlpatterns = router.urls
