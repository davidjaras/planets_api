from rest_framework import viewsets

from .serializers import PlanetSerializer
from .models import Planet


class PlanetViewSet(viewsets.ModelViewSet):
    queryset = Planet.objects.all().order_by('name')
    serializer_class = PlanetSerializer
