from rest_framework import viewsets

from .serializers import PlanetSerializer
from .models import Planet


class PlanetViewSet(viewsets.ModelViewSet):
    queryset = Planet.objects.all().order_by('-id')
    serializer_class = PlanetSerializer
