from django.contrib.auth.models import User 
from rest_framework import serializers 
from rest_framework.validators import UniqueValidator
from .models import Board, List, Card


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = User 
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user


class BoardSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Board 
        fields = ('id', 'title', 'author')


class ListSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    board = BoardSerializer(read_only=True)

    class Meta:
        model = List 
        fields = ('id', 'list_title', 'author', 'board')


class CardSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    board_list = ListSerializer(read_only=True)
    
    class Meta:
        model = Card 
        fields = ('id', 'card_title', 'author', 'board_list')