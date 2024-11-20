# apps/authentication/views.py
from django_ratelimit.decorators import ratelimit
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers.auth_serializer import LoginSerializer, SignupSerializer
from django.http import JsonResponse

@api_view(['GET'])
def home(request):
    return Response({"message": "Welcome to creditDispute"}, status=200)

def rate_limit_exceeded_view(request, exception):
    return JsonResponse({"message": "Too many requests"}, status=429)


@ratelimit(key='ip', rate='5/m', method='POST')
@api_view(['POST'])
def login_view(request):
    was_limited = getattr(request, 'limited', False)
    if was_limited:
        return Response({"message": "Too many requests"}, status=status.HTTP_429_TOO_MANY_REQUESTS)

    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data
        tokens = serializer.get_tokens(user)
        return Response({"message": "Login successful", "tokens": tokens}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@ratelimit(key='ip', rate='5/m', method='POST')
@api_view(['POST'])
def signup_view(request):
    was_limited = getattr(request, 'limited', False)
    if was_limited:
        return Response({"message": "Too many requests"}, status=status.HTTP_429_TOO_MANY_REQUESTS)

    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({"message": "Signup successful", "user_id": user.id}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

