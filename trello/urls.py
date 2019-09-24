from django.contrib.auth import views as auth_views
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from .views import UserSignupViewset, BoardViewset, ListViewset


router = DefaultRouter()
router.register(r'user', UserSignupViewset)
router.register(r'board', BoardViewset)
router.register(r'list', ListViewset)


urlpatterns = [
    path('', include(router.urls)),
]