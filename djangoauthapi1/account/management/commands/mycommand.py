from django.core.management.base import BaseCommand
from account.recommendation import get_recommendations
from account.models import User

class Command(BaseCommand):
    help = 'Generate recommendations for all users'

    def handle(self, *args, **kwargs):
        for user in User.objects.all():
            recommendations = get_recommendations(user.id)
            # Here you could save the recommendations to the database
            self.stdout.write(f'Recommendations for {user.username}: {recommendations}')
