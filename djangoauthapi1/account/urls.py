from django.urls import path
from account.views import SendPasswordResetEmailView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, UserPasswordResetView,bookingList,ever_infoView,ever_itineraryView,Everest_Included_Ornot_View,Cards_view,Pokhara_infoView,Pokhara_itineraryView,Pokhara_Included_Ornot_View
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('booking/', bookingList.as_view(), name='booking'),
    path('everest_info/',ever_infoView.as_view(), name='ever_info'),
    path('everest_itinerary/',ever_itineraryView.as_view(), name='ever_itinerary'),
    path('everest_inc_exc/',Everest_Included_Ornot_View.as_view(), name='everest_inc_exc'),
    path('cards/',Cards_view.as_view(), name='Cards'),
    path('Pokhara_info/',Pokhara_infoView.as_view(), name='Pokhara_info'),
    path('Pokhara_itinerary/',Pokhara_itineraryView.as_view(), name='Pokhara_itinerary'),
    path('Pokhara_inc_exc/',Pokhara_Included_Ornot_View.as_view(), name='Pokhara_inc_exc'),
    ]
   