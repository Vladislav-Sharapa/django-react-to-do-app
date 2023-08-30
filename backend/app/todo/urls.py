
from django.urls import path
from .views import *

urlpatterns = [
    path('task/list/', task_list, name='task_list'),
    path('task/create/', TaskCreate.as_view()),
    path('task/update/<int:pk>/', TaskUpdate.as_view()),
    path('task/delete/<int:pk>/', task_delete)
]
