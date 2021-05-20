from django.db import models

# Create your models here.

class Car(models.Model):
    marka = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    rok_produkcji = models.CharField(max_length=4)
    Paliwo = models.CharField(max_length=100)
    Kraj_pochodzenia = models.CharField(max_length=100)


def __str__(self):
    return self.marka