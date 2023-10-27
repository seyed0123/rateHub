# Generated by Django 4.1 on 2023-10-26 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Follower",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("follower", models.CharField(max_length=100)),
                ("user", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="person",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "username",
                    models.CharField(default="test", max_length=100, unique=True),
                ),
                ("boi", models.TextField(blank=True)),
                ("name", models.CharField(default="", max_length=20)),
                (
                    "profile_img",
                    models.ImageField(
                        default="default-profile.jpg", upload_to="profile"
                    ),
                ),
                (
                    "banner_img",
                    models.ImageField(default="default_banner.jpg", upload_to="banner"),
                ),
                ("password", models.CharField(max_length=15)),
                ("email", models.EmailField(max_length=254)),
                ("can_follow", models.BooleanField()),
                ("can_search", models.BooleanField()),
            ],
        ),
    ]