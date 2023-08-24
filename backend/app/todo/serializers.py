from .models import Task
from rest_framework.serializers import ModelSerializer


class TaskSerializer(ModelSerializer):

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'created_date', 'completed']

    def update(self, instance: Task, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.completed = validated_data.get('completed', instance.completed)
        instance.save()
        return instance
    
    def create(self, validated_data):
        return Task.objects.create(**validated_data)

