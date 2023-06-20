from rest_framework import serializers 
from .models import Movie, User

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        managed = True
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True, many=True)
    class Meta:
        model = User
        managed=True
        fields = "__all__"