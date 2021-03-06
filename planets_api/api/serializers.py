from rest_framework import serializers
from .models import Planet


class PlanetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Planet
        fields = ('id', 'name', 'satellites', 'diameter')