from django.contrib import admin
from django.conf.urls import include
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('trello.urls')),
]

urlpatterns += [
    # path('api-auth/', include('rest_framework.urls')),
]
