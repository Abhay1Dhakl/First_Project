from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import SendPasswordResetEmailSerializer, UserChangePasswordSerializer, UserLoginSerializer, UserPasswordResetSerializer, UserProfileSerializer, UserRegistrationSerializer,bookingSerializer,everest_infoSerializer,Everest_ItinerarySerializer,Everest_Included_OrnotSerializer, Cards_Serializers,Pokhara_infoSerializer,Pokhara_ItinerarySerializer,Pokhara_Included_OrnotSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from .models import EverestInformation, EverestItinerary ,Everest_Included_Ornot,Cards, Pokhara_Included_Ornot, PokharaItinerary,PokharaInformation
<<<<<<< HEAD
=======
from django.http import JsonResponse
import requests
from django.shortcuts import render
>>>>>>> 04a759a (third commit)

# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class UserRegistrationView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)

class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
    password = serializer.data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
      token = get_tokens_for_user(user)
      return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
      return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)

class UserChangePasswordView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)

class SendPasswordResetEmailView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = SendPasswordResetEmailSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)

class UserPasswordResetView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token, format=None):
    serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)

class bookingList(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = bookingSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Booked Successfully'}, status=status.HTTP_201_CREATED)

class ever_infoView(ListAPIView):
  queryset = EverestInformation.objects.all()
  serializer_class = everest_infoSerializer
 
class ever_itineraryView(ListAPIView):
  queryset = EverestItinerary.objects.all()
  serializer_class = Everest_ItinerarySerializer

class Everest_Included_Ornot_View(ListAPIView):
  queryset = Everest_Included_Ornot.objects.all()
  serializer_class = Everest_Included_OrnotSerializer

class Cards_view(ListAPIView):
  queryset = Cards.objects.all()
  serializer_class = Cards_Serializers

class Pokhara_infoView(ListAPIView):
  queryset = PokharaInformation.objects.all()
  serializer_class = everest_infoSerializer
 
class Pokhara_itineraryView(ListAPIView):
  queryset = PokharaItinerary.objects.all()
  serializer_class = Everest_ItinerarySerializer

class Pokhara_Included_Ornot_View(ListAPIView):
  queryset = Pokhara_Included_Ornot.objects.all()
<<<<<<< HEAD
  serializer_class = Everest_Included_OrnotSerializer
=======
  serializer_class = Everest_Included_OrnotSerializer


# def initiate_payment(request):
#     # Example payload for initiating payment
#     payload = {
#         'amount': 1000,  # Example amount
#         'order_id': 'ORDER123'  # Example order ID
#     }

#     # Replace 'YOUR_INITIATION_ENDPOINT' with the actual initiation endpoint provided by eSewa
#     initiation_endpoint = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form'

#     try:
#         response = requests.post(initiation_endpoint, json=payload)
#         if response.status_code == 200:
#             return JsonResponse(response.json())
#         else:
#             return JsonResponse({"error": "Failed to initiate payment"}, status=500)
#     except Exception as e:
#         return JsonResponse({"error": str(e)}, status=500)

# def verify_payment(request):
#     # Example payload for verifying payment
#     payload = {
#         'payment_id': request.POST.get('payment_id'),  # Example: Get payment ID from request
#         'amount': request.POST.get('amount')  # Example: Get amount from request
#     }

#     # Replace 'YOUR_VERIFICATION_ENDPOINT' with the actual verification endpoint provided by eSewa
#     verification_endpoint = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form'

#     try:
#         response = requests.post(verification_endpoint, json=payload)
#         if response.status_code == 200:
#             return JsonResponse(response.json())
#         else:
#             return JsonResponse({"error": "Failed to verify payment"}, status=500)
#     except Exception as e:
#         return JsonResponse({"error": str(e)}, status=500)

def handle_payment(request):
    # Handle payment form submission here
    if request.method == 'POST':
        # Retrieve form data from request.POST
        amount = request.POST.get('amount')
        tax_amount = request.POST.get('tax_amount')
        total_amount = request.POST.get('total_amount')
        transaction_uuid = request.POST.get('transaction_uuid')
        # Process payment and generate response
        
        # For now, let's return a simple success response
        return JsonResponse({"status": "SUCCESS", "message": "Payment received", "amount": amount})
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)

def check_payment_status(request):
    # Handle status check API here
    if request.method == 'GET':
        # Retrieve product code, total amount, and transaction UUID from request.GET
        product_code = request.GET.get('product_code')
        total_amount = request.GET.get('total_amount')
        transaction_uuid = request.GET.get('transaction_uuid')
        
        # Check payment status and generate response
        
        # For now, let's return a simple success response
        return JsonResponse({"status": "SUCCESS", "message": "Payment successful", "transaction_code": "0004T5I"})
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)
>>>>>>> 04a759a (third commit)
