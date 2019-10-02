from django.contrib.auth import views as auth_views
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.authtoken.views import ObtainAuthToken
from .views import UserSignupViewset, BoardViewset, ListViewset, CardViewset


urlpatterns = [
    path('signup', UserSignupViewset.as_view({'post': 'create'}), name='signup'),
    path('dashboard/', BoardViewset.as_view({'get': 'list', 'post': 'create'}), name='dashboard'),
    path('board/<int:pk>', BoardViewset.as_view({'get': 'retrieve', 'put': 'update'}), name='board-detail'),
    path('board/<int:pk>/list', ListViewset.as_view({'get': 'list_detail', 'post': 'create'}), name='add-list'),
    path('board/list/<int:pk>/card', CardViewset.as_view({'get': 'card_detail', 'post': 'create'}), name='add-card'),
    # path('', TemplateView.as_view(template_name="home.html"), name="home"),
    path('login', ObtainAuthToken.as_view()),
]