# Generated by Django 4.1 on 2023-10-26 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("story", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="story",
            name="img",
            field=models.ImageField(upload_to="story"),
        ),
    ]