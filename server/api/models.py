from django.db import models

# Create your models here.


class Movie(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False)
    year = models.CharField(max_length=20)
    rated = models.CharField(max_length=20)
    released = models.CharField(max_length=20)
    runtime = models.CharField(max_length=20)
    genre = models.CharField(max_length=100)
    director = models.CharField(max_length=200)
    writer = models.CharField(max_length=200)
    actors = models.CharField(max_length=200)
    plot = models.TextField()
    language = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    award = models.TextField()
    poster = models.TextField()
    ratings = models.TextField()
    metascore = models.CharField(max_length=20)
    imdbrating = models.CharField(max_length=20)
    imdbvote = models.CharField(max_length=20)
    imdbID = models.CharField(max_length=20)
    type = models.CharField(max_length=50)
    dvd = models.CharField(max_length=20)
    boxoffice = models.CharField(max_length=20)
    production = models.CharField(max_length=100)
    website = models.TextField()
    response = models.CharField(max_length=20)

    def __str__(self):
        return self.title

class User(models.Model):
    userID = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.firstName + self.lastName
