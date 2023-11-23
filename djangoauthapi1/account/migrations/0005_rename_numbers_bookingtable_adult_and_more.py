# Generated by Django 4.0.3 on 2023-10-03 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_bookingtable_names_bookingtable_numbers'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bookingtable',
            old_name='numbers',
            new_name='adult',
        ),
        migrations.RemoveField(
            model_name='bookingtable',
            name='names',
        ),
        migrations.AddField(
            model_name='bookingtable',
            name='child',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='bookingtable',
            name='date',
            field=models.DateField(null=True),
        ),
    ]
