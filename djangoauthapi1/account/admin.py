from django.contrib import admin
from account.models import User,Admin
from .models import BookingTable, EverestInformation,Itinerary,Everest_Included_Ornot,Cards,Pokhara_Included_Ornot,PokharaInformation,PokharaItinerary,ProductInfo,Destination,UserPreference
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserModelAdmin(BaseUserAdmin):
  # The fields to be used in displaying the User model.
  # These override the definitions on the base UserModelAdmin
  # that reference specific fields on auth.User.
  list_display = ('id', 'email', 'name', 'tc', 'is_admin')
  list_filter = ('is_admin',)
  fieldsets = (
      ('User Credentials', {'fields': ('email', 'password')}),
      ('Personal info', {'fields': ('name', 'tc')}),
      ('Permissions', {'fields': ('is_admin',)}),
  )
  # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
  # overrides get_fieldsets to use this attribute when creating a user.
  add_fieldsets = (
      (None, {
          'classes': ('wide',),
          'fields': ('email', 'name', 'tc', 'password1', 'password2'),
      }),
  )
  search_fields = ('email',)
  ordering = ('email', 'id')
  filter_horizontal = ()


class AdminModelAdmin(BaseUserAdmin):
  # The fields to be used in displaying the User model.
  # These override the definitions on the base UserModelAdmin
  # that reference specific fields on auth.User.
  list_display = ('id', 'email', 'name', 'tc', 'is_admin')
  list_filter = ('is_admin',)
  fieldsets = (
      ('User Credentials', {'fields': ('email', 'password')}),
      ('Personal info', {'fields': ('name', 'tc')}),
      ('Permissions', {'fields': ('is_admin',)}),
  )
  # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
  # overrides get_fieldsets to use this attribute when creating a user.
  add_fieldsets = (
      (None, {
          'classes': ('wide',),
          'fields': ('email', 'name', 'tc', 'password1', 'password2'),
      }),
  )
  search_fields = ('email',)
  ordering = ('email', 'id')
  filter_horizontal = ()


@admin.register(BookingTable)
class bookTable(admin.ModelAdmin):
  list_display = ['date','child','adult']

@admin.register(ProductInfo)
class productInfo(admin.ModelAdmin):
  list_display = ['product_id','product_name','product_location','product_season']

@admin.register(EverestInformation)
class everest_info(admin.ModelAdmin):
  list_display = ['para1','para2']

@admin.register(Itinerary)
class itinerary(admin.ModelAdmin):
  list_display = ['name','topic','details']

@admin.register(Everest_Included_Ornot)
class everest_inc_exc(admin.ModelAdmin):
  list_display = ['included', 'excluded']

@admin.register(Cards)
class cards_info(admin.ModelAdmin):
  list_display= ['heading','descr', 'topic','photo','category']

@admin.register(PokharaInformation)
class everest_info(admin.ModelAdmin):
  list_display = ['para1','para2']

@admin.register(PokharaItinerary)
class everest_itinerary(admin.ModelAdmin):
  list_display = ['topic','details']

@admin.register(Pokhara_Included_Ornot)
class everest_inc_exc(admin.ModelAdmin):
  list_display = ['included', 'excluded']
# Now register the new UserModelAdmin...
admin.site.register(User, UserModelAdmin)

admin.site.register(Admin, AdminModelAdmin)

admin.site.register(Destination)
admin.site.register(UserPreference)

