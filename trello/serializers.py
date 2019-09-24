from django.contrib.auth.models import User 
from rest_framework import serializers 
from .models import Board, List


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = User 
        fields = ('username', 'email', 'password')


class BoardSerializer(serializers.ModelSerializer):
    """
    Link list here
    """

    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Board 
        fields = ('title', 'author')

class ListSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = List 
        fields = ('list_title', 'author')
