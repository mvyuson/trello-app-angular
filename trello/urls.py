from django.urls import path
from django.views.generic import TemplateView
from trello.views import SignupView
from trello.views import LoginView
from . import views

urlpatterns = [
    path('', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
]