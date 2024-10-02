from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProjectViewSet,
    MarketplaceListingViewSet,
    ProjectInvitationViewSet,
    ActivityViewSet,
    PointSystemViewSet,
    ResourceViewSet,
    # VerificationViewSet,
    PaymentViewSet,
    BudgetViewSet,
)

router = DefaultRouter()
# router.register(r"users", UserViewSet)
# router.register(r"profiles", ProfileViewSet)
router.register(r"projects", ProjectViewSet)
router.register(r"marketplace-listings", MarketplaceListingViewSet)
router.register(r"project-invitations", ProjectInvitationViewSet)
router.register(r"activities", ActivityViewSet)
router.register(r"points", PointSystemViewSet)
router.register(r"resources", ResourceViewSet)
# router.register(r"verifications", VerificationViewSet)
router.register(r"payments", PaymentViewSet)
router.register(r"budgets", BudgetViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
