from django.db import models
from django.db import admin
from django.conf import settings

class Service(models.Model):
    seller = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    service_name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    duration_of_service = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    sample_image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.service_name