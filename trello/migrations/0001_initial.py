# Generated by Django 2.2.5 on 2019-09-24 12:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('archived', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(default='images/default.png', upload_to='images/')),
                ('bio', models.TextField(default='')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='List',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('list_title', models.CharField(max_length=200)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('archived', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trello.Board')),
            ],
        ),
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_title', models.CharField(max_length=200)),
                ('card_description', models.TextField(null=True)),
                ('image', models.ImageField(null=True, upload_to='images/')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('archived', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('board_list', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trello.List')),
            ],
        ),
        migrations.CreateModel(
            name='BoardMembers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deactivate', models.BooleanField(default=False)),
                ('owner', models.BooleanField(default=False)),
                ('board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trello.Board')),
                ('members', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='BoardInvite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('email_member', models.CharField(max_length=200)),
                ('board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trello.Board')),
            ],
        ),
    ]
