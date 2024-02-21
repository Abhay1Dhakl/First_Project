from rest_framework import serializers
from account.models import User,BookingTable,EverestInformation,EverestItinerary,Everest_Included_Ornot,Cards, Pokhara_Included_Ornot, PokharaItinerary,PokharaInformation
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from account.utils import Util

class UserRegistrationSerializer(serializers.ModelSerializer):
  # We are writing this becoz we need confirm password field in our Registratin Request
  password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
  class Meta:
    model = User
    fields=['email', 'name', 'password', 'password2', 'tc']
    extra_kwargs={
      'password':{'write_only':True}
    }

  # Validating Password and Confirm Password while Registration
  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password doesn't match")
    return attrs

  def create(self, validate_data):
    return User.objects.create_user(**validate_data)

class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    model = User
    fields = ['email', 'password']

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'email', 'name']

class UserChangePasswordSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  class Meta:
    fields = ['password', 'password2']

  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    user = self.context.get('user')
    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password doesn't match")
    user.set_password(password)
    user.save()
    return attrs

class SendPasswordResetEmailSerializer(serializers.Serializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    fields = ['email']

  def validate(self, attrs):
    email = attrs.get('email')
    if User.objects.filter(email=email).exists():
      user = User.objects.get(email = email)
      uid = urlsafe_base64_encode(force_bytes(user.id))
      print('Encoded UID', uid)
      token = PasswordResetTokenGenerator().make_token(user)
      print('Password Reset Token', token)
      link = 'http://localhost:3000/api/user/reset/'+uid+'/'+token
      print('Password Reset Link', link)
      # Send EMail
      body = 'Click Following Link to Reset Your Password '+link
      data = {
        'subject':'Reset Your Password',
        'body':body,
        'to_email':user.email
      }
      # Util.send_email(data)
      return attrs
    else:
      raise serializers.ValidationError('You are not a Registered User')

class UserPasswordResetSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  class Meta:
    fields = ['password', 'password2']

  def validate(self, attrs):
    try:
      password = attrs.get('password')
      password2 = attrs.get('password2')
      uid = self.context.get('uid')
      token = self.context.get('token')
      if password != password2:
        raise serializers.ValidationError("Password and Confirm Password doesn't match")
      id = smart_str(urlsafe_base64_decode(uid))
      user = User.objects.get(id=id)
      if not PasswordResetTokenGenerator().check_token(user, token):
        raise serializers.ValidationError('Token is not Valid or Expired')
      user.set_password(password)
      user.save()
      return attrs
    except DjangoUnicodeDecodeError as identifier:
      PasswordResetTokenGenerator().check_token(user, token)
      raise serializers.ValidationError('Token is not Valid or Expired')
    
class bookingSerializer(serializers.ModelSerializer):
  class Meta:
    
      date= serializers.DateField(style={'input_type':'date'}, write_only=True)
      child= serializers.IntegerField(style={'input_type':'number'}, write_only=True)
      adult= serializers.IntegerField(style={'input_type':'number'}, write_only=True)
      print("adult and child", adult, child)
      model = BookingTable
      fields = ['date','child','adult']
      def booked_data(self, validate_data):
        return User.objects.booked_data(**validate_data)


class everest_infoSerializer(serializers.ModelSerializer):
  class Meta:
    model = EverestInformation
    fields = ['para1','para2']

class Everest_ItinerarySerializer(serializers.ModelSerializer):
  class Meta:
    model = EverestItinerary
    fields = ['topic','details']

class Everest_Included_OrnotSerializer(serializers.ModelSerializer):
  class Meta:
    model = Everest_Included_Ornot
    fields = ['included', 'excluded']

class Cards_Serializers(serializers.ModelSerializer):
  class Meta:
    model = Cards
    fields = ['heading','descr', 'topic','photo','category']

class Pokhara_infoSerializer(serializers.ModelSerializer):
  class Meta:
    model = PokharaInformation
    fields = ['para1','para2']

class Pokhara_ItinerarySerializer(serializers.ModelSerializer):
  class Meta:
    model = PokharaItinerary
    fields = ['topic','details']

class Pokhara_Included_OrnotSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pokhara_Included_Ornot
    fields = ['included', 'excluded']