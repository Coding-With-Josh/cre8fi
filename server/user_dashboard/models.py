from django.db import models
from django.conf import settings


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    project_manager = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="managed_projects",
    )
    collaborators = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name="current_projects"
    )
    status = models.CharField(
        max_length=50, choices=[("ongoing", "Ongoing"), ("completed", "Completed"),  ("cancelled", "Cancelled"), ("pending", "Pending")]
    )
    earnings = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    deadlines = models.DateField(null=True, blank=True)
    milestones = models.JSONField(null=True, blank=True)  # Track task milestones

    def __str__(self):
        return self.name


# Marketplace Model (For Creators' Service Listings)
class MarketplaceListing(models.Model):
    creator = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="marketplace_listings",
    )
    service_title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    nft = models.BooleanField(default=False)  # Option to sell NFTs
    inquiries = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.service_title


# Project Invitations Model
class ProjectInvitation(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    invited_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=20,
        choices=[
            ("pending", "Pending"),
            ("accepted", "Accepted"),
            ("declined", "Declined"),
        ],
    )

    def __str__(self):
        return f"Invitation to {self.invited_user.username} for {self.project.name}"


# Activity Feed Model
class Activity(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=50)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.activity_type}"


# Content Point System Model (Future Feature)
class PointSystem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)
    conversion_rate = models.DecimalField(
        max_digits=5, decimal_places=2, default=1.00
    )  # Future conversion rate to tokens

    def __str__(self):
        return f"{self.user.username}'s Points"


# Learning and Resources Model
class Resource(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    resource_type = models.CharField(
        max_length=50,
        choices=[("tutorial", "Tutorial"), ("guide", "Guide"), ("tip", "Tip")],
    )

    def __str__(self):
        return self.title


# Budget and Payments Model
class Payment(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    payer = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="payments_made"
    )
    payee = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="payments_received",
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment of {self.amount} from {self.payer} to {self.payee}"


class Budget(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    total_budget = models.DecimalField(max_digits=10, decimal_places=2)
    spent_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return f"Budget for {self.project.name}"
