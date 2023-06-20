from django.db import models

# Create your models here.

class User(models.Model):
    userID = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.firstName + " " + self.lastName

class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    Title = models.CharField(max_length=100, null=False, blank=False)
    Year = models.CharField(max_length=20, null=True, blank=True)
    Rated = models.CharField(max_length=20, null=True, blank=True)
    Released = models.CharField(max_length=20, null=True, blank=True)
    Runtime = models.CharField(max_length=20, null=True, blank=True)
    Genre = models.CharField(max_length=100, null=True, blank=True)
    Director = models.CharField(max_length=200, null=True, blank=True)
    Writer = models.CharField(max_length=200, null=True, blank=True)
    Actors = models.CharField(max_length=200, null=True, blank=True)
    Plot = models.TextField(null=True, blank=True)
    Language = models.CharField(max_length=100, null=True, blank=True)
    Country = models.CharField(max_length=50, null=True, blank=True)
    Awards = models.TextField(null=True, blank=True)
    Poster = models.TextField(null=True, blank=True)
    Ratings = models.TextField(null=True, blank=True)
    Metascore = models.CharField(max_length=20, null=True, blank=True)
    imdbRating = models.CharField(max_length=20, null=True, blank=True)
    imdbVotes = models.CharField(max_length=20, null=True, blank=True)
    imdbID = models.CharField(max_length=20, null=True, blank=True)
    Type = models.CharField(max_length=50, null=True, blank=True)
    DVD = models.CharField(max_length=20, null=True, blank=True)
    BoxOffice = models.CharField(max_length=20, null=True, blank=True)
    Production = models.CharField(max_length=100, null=True, blank=True)
    Website = models.TextField(null=True, blank=True)
    Response = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.title


