from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

#  Custom User Manager
class AdminManager(BaseUserManager):
  def create_user(self, email, name, tc, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          tc=tc,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name, tc, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          password=password,
          name=name,
          tc=tc,
      )
      user.is_admin = True
      user.save(using=self._db)
      return user

#  Custom User Model
class Admin(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  name = models.CharField(max_length=200)
  tc = models.BooleanField()
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = AdminManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'tc']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app app_label?"
      # Simplest possible answer: Yes, always
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin



#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, name, tc, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          tc=tc,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name, tc, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          password=password,
          name=name,
          tc=tc,
      )
      user.is_admin = True
      user.save(using=self._db)
      return user

#  Custom User Model
class User(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  name = models.CharField(max_length=200)
  tc = models.BooleanField()
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'tc']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app app_label?"
      # Simplest possible answer: Yes, always
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin


class BookingTable(models.Model):
    date= models.DateField(null=True)
    child= models.IntegerField(null=True)
    adult= models.IntegerField( null=True)


    def booked_data(self, date, child, adult):


      user = self.model(
          date=date, 
          child=child,
          adult=adult,
      )

      user.save(using=self._db)
      return user

class ProductInfo(models.Model):
    product_id = models.IntegerField(null=True)
    product_name = models.TextField(null = True)
    product_location = models.TextField(null = True)
    product_season = models.TextField(null = True)

    def product_detail(self,product_id,product_name,product_location,product_season):
        user = self.model(
            product_id = product_id,
            product_name = product_name,
            product_location = product_location,
            product_season = product_season,
        )
        user.save(using = self._db)
        return user
class EverestInformation(models.Model):
    para1 = models.CharField(max_length=10000,null=True)
    para2 = models.CharField(max_length=10000,null=True)
     

class Itinerary(models.Model):
    name = models.CharField(max_length=100,null=True)
    topic = models.CharField(max_length=10000,null=True)
    details = models.CharField(max_length=10000,null=True)

class Everest_Included_Ornot(models.Model):
    included = models.CharField(max_length=10000,null=True)
    excluded = models.CharField(max_length=10000,null=True)

class Cards(models.Model):
    heading= models.CharField(max_length=200,null=True)
    descr=models.CharField(max_length=2000,null=True)
    topic=models.CharField(max_length=200,null=True)
    photo = models.ImageField(upload_to ='uploads/',null= True)
    category=models.CharField(max_length=200,null=True)

class PokharaInformation(models.Model):
    para1 = models.CharField(max_length=10000,null=True)
    para2 = models.CharField(max_length=10000,null=True)
     

class PokharaItinerary(models.Model):
    topic = models.CharField(max_length=10000,null=True)
    details = models.CharField(max_length=10000,null=True)

class Pokhara_Included_Ornot(models.Model):
    included = models.CharField(max_length=10000,null=True)
    excluded = models.CharField(max_length=10000,null=True)

class Item(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    score = models.IntegerField()


class Destination(models.Model):
    TYPE_CHOICES = [
        ('Beach', 'Beach'),
        ('City', 'City'),
        ('Historical', 'Historical'),
        ('Cultural', 'Cultural'),
        ('Adventure', 'Adventure'),
    ]
    BUDGET_CHOICES = [
        ('Budget', 'Budget-Friendly'),
        ('Mid-range', 'Mid-range'),
        ('Luxury', 'Luxury'),
    ]
    
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=100)
    destination_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    activities = models.TextField()  # Store as a comma-separated string (you can convert this into an array in code)
    seasonality = models.CharField(max_length=50)
    budget_range = models.CharField(max_length=50, choices=BUDGET_CHOICES)
    rating = models.FloatField()
    family_friendly = models.BooleanField(default=False)
    eco_friendly = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class UserPreference(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    preferred_destination_types = models.CharField(max_length=255)  # Store as a comma-separated string
    preferred_activities = models.CharField(max_length=255)  # Store as a comma-separated string
    preferred_budget_range = models.CharField(max_length=50, choices=Destination.BUDGET_CHOICES)
    family_friendly = models.BooleanField(default=False)
    eco_friendly = models.BooleanField(default=False)

    def __str__(self):
        return self.user.name
    
    def get_user_email(self):
        return self.user.email