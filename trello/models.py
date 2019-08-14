from django.conf import settings
from django.db import models


class Card(models.Model):
    card_title = models.CharField(max_length=200)

class List(models.Model):
    list_title = models.CharField(max_length=200)
    card_title = models.ForeignKey(Card, on_delete=models.CASCADE)

class Board(models.Model):
    title = models.CharField(max_length=200)
    list_title = models.ForeignKey(List, on_delete=models.CASCADE)