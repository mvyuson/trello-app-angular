from django.conf import settings
from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    first_password = models.CharField(max_length=200)
    second_password = models.CharField(max_length=200)
    