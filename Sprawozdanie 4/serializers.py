from rest_framework import serializers
from .models import Car

class Carserializer(serializers.Serializer):
    marka = serializers.CharField(max_length=100)
    model = serializers.CharField(max_length=100)
    rok_produkcji = serializers.CharField(max_length=4)
    Paliwo = serializers.CharField(max_length=100)
    Kraj_pochodzenia = serializers.CharField(max_length=100)
    date

    def create(self, validated_data):
        return Car.objects.create(validated_data)
    def update(self,instance,validated_data):
        instance.marka = validated_data.get('marka',instance.title)
        instance.model = validated_data.get('model', instance.model)
        instance.rok_produkcji = validated_data.get('rok_produkcji', instance.rok_produkcji)
        instance.Paliwo = validated_data.get('Paliwo', instance.Paliwo)
        instance.Kraj_pochodzenia = validated_data.get('Kraj_pochodzenia', instance.Kraj_pochodzenia)
        instance.save()
        return instance

