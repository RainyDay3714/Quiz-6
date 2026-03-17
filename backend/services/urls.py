from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.ServiceListView.as_view(), name='service-list'),
    path('<int:pk>/', views.ServiceDetailView.as_view(), name='service-detail'),
    path('manage/', views.SellerServiceManageView.as_view(), name='seller-manage'),
    path('manage/<int:pk>/', views.SellerServiceDetailView.as_view(), name='seller-detail-manage'),
]