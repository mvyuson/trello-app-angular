# Generated by Django 2.0.13 on 2019-08-14 06:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trello', '0002_auto_20190814_1358'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
    ]