from django.contrib.auth.models import User 
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import UserSerializer, BoardSerializer, ListSerializer
from .models import Board, List


class UserSignupViewset(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class BoardViewset(viewsets.ModelViewSet):
    serializer_class = BoardSerializer
    queryset = Board.objects.all()
    permission_classes = [permissions.IsAuthenticated]


class ListViewset(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    queryset = List.objects.all()
    permission_classes = [permissions.IsAuthenticated]