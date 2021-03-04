from django.db import models


class Planet(models.Model):
    name = models.CharField(max_length=50)
    satellites = models.IntegerField(default=0)
    diameter = models.FloatField()

    def __str__(self):
        return self.name
