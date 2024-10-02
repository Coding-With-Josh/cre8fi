from rest_framework import serializers
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


# User Serializer
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = [
#             "id",
#             "username",
#             "email",
#             "role",
#             "bio",
#             "profile_picture",
#             "verified",
#         ]


# Profile Serializer
# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = ["id", "user", "skills", "visibility_metrics"]


# Project Serializer
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id", 
            "name",
            "description",
            "project_manager",
            "collaborators",
            "status",
            "earnings",
            "deadlines",
            "milestones",
        ]


# Marketplace Listing Serializer
class MarketplaceListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketplaceListing
        fields = [
            "id",
            "creator",
            "service_title",
            "description",
            "price",
            "nft",
            "inquiries",
        ]


# Project Invitation Serializer
class ProjectInvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectInvitation
        fields = ["id", "project", "invited_user", "status"]


# Activity Serializer
class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "user", "activity_type", "content", "created_at"]


# Point System Serializer
class PointSystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PointSystem
        fields = ["id", "user", "points", "conversion_rate"]


# Resource Serializer
class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ["id", "title", "content", "resource_type"]


# Verification Serializer
# class VerificationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Verification
#         fields = ["id", "user", "verified_at", "visibility_boost"]


# Payment Serializer
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ["id", "project", "payer", "payee", "amount", "payment_date"]


# Budget Serializer
class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ["id", "project", "total_budget", "spent_amount"]
