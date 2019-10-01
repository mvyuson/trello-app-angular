from django.contrib.auth.models import User 
from django.shortcuts import render, get_object_or_404
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework import permissions
from .serializers import UserSerializer, BoardSerializer, ListSerializer, CardSerializer
from .models import Board, List, Card


class UserSignupViewset(viewsets.ViewSet):
    serializer_class = UserSerializer

    def create(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.data)


class BoardViewset(viewsets.ViewSet):
    serializer_class = BoardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try: 
            return Board.objects.get(pk=pk)
        except Board.DoesNotExist:
            raise Http404


    def list(self, *args, **kwargs):
        boards = Board.objects.all()
        serializer = self.serializer_class(boards, many=True)
        return Response(serializer.data)
    
    def create(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            return Response(serializer.data, status=200)
        return Response(serializer.data)

    def retrieve(self, *args, **kwargs):
        obj = get_object_or_404(Board,  pk=kwargs.get('pk'))
        serializer = self.serializer_class(obj)
        return Response(serializer.data)

    def update(self, *args, **kwargs):
        obj = get_object_or_404(Board,  pk=kwargs.get('pk'))
        serializer = self.serializer_class(obj, data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)


class ListViewset(viewsets.ViewSet):
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list_detail(self, *args, **kwargs):
        board = get_object_or_404(Board, pk=kwargs.get('pk'))
        lists = List.objects.filter(author=self.request.user, board=board)
        serializer = self.serializer_class(lists, many=True)
        return Response(serializer.data)

    def create(self, *args, **kwargs):
        #import pdb; pdb.set_trace()
        serializer = self.serializer_class(data=self.request.data, context={'request': self.request})
        board = get_object_or_404(Board, pk=kwargs.get('pk'))
        if serializer.is_valid():
            serializer.save(author=self.request.user, board=board)
            return Response(serializer.data, status=201)
        return Response(serializer.data)


class CardViewset(viewsets.ViewSet):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def card_detail(self, *args, **kwargs):
        board_list = get_object_or_404(List, pk=kwargs.get('pk'))
        cards = Card.objects.filter(author=self.request.user, board_list=board_list)
        serializer = self.serializer_class(cards, many=True)
        return Response(serializer.data)

    def create(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        board_list = get_object_or_404(List, pk=kwargs.get('pk'))
        if serializer.is_valid():
            serializer.save(author=self.request.user, board_list=board_list)
            return Response(serializer.data, status=201)
        return Response(serializer.data)
