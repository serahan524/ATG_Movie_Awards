from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MovieSerializer, UserSerializer
from .models import Movie, User

# Create your views here.
class MovieView(viewsets.ModelViewSet): 
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

