from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer

# Create your views here.

@api_view(['GET'])
def task_list(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    
    if serializer.data:
        return Response(serializer.data)
    
    return Response({'message': 'No data in database'})


class TaskCreate(APIView):
    
    def post(self, request):
        serializer = TaskSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'invalid data input'}, status=status.HTTP_400_BAD_REQUEST)
        

class TaskUpdate(APIView):

    def post(self, request, pk):
        try:
             instance = Task.objects.get(id=pk)
        except:
            return Response({"error": "Object does not exists"})
       
        serializer = TaskSerializer(instance=instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

