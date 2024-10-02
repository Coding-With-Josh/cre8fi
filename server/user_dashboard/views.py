from rest_framework import viewsets
from .models import (
    Project,
    MarketplaceListing,
    ProjectInvitation,
    Activity,
    PointSystem,
    Resource,
    # Verification,
    Payment,
    Budget,
)
from .serializers import (
    ProjectSerializer,
    MarketplaceListingSerializer,
    ProjectInvitationSerializer,
    ActivitySerializer,
    PointSystemSerializer,
    ResourceSerializer,
    # VerificationSerializer,
    PaymentSerializer,
    BudgetSerializer,
)


# User ViewSet
# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# # Profile ViewSet
# class ProfileViewSet(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer


# Project ViewSet
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


# Marketplace Listing ViewSet
class MarketplaceListingViewSet(viewsets.ModelViewSet):
    queryset = MarketplaceListing.objects.all()
    serializer_class = MarketplaceListingSerializer


# Project Invitation ViewSet
class ProjectInvitationViewSet(viewsets.ModelViewSet):
    queryset = ProjectInvitation.objects.all()
    serializer_class = ProjectInvitationSerializer


# Activity ViewSet
class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer


# Point System ViewSet
class PointSystemViewSet(viewsets.ModelViewSet):
    queryset = PointSystem.objects.all()
    serializer_class = PointSystemSerializer


# Resource ViewSet
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


# Verification ViewSet
# class VerificationViewSet(viewsets.ModelViewSet):
#     queryset = Verification.objects.all()
#     serializer_class = VerificationSerializer


# Payment ViewSet
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


# Budget ViewSet
class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
