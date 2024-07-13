from django.db import models


# Create your models here.

class story(models.Model):
    owner = models.CharField(max_length=16, null=False, default='0')
    img = models.ImageField(upload_to='story', blank=False, null=False)
    text = models.TextField(blank=True)
