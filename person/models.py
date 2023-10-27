from django.core.files.base import ContentFile
from django.db import models
from django.contrib.auth import get_user_model
from django.db import models
from io import BytesIO
import qrcode
from django.core.files import File
from PIL import Image, ImageDraw

User = get_user_model()


# Create your models here.
class person(models.Model):
    username = models.CharField(max_length=100, unique=True, default='test')
    boi = models.TextField(blank=True)
    name = models.CharField(max_length=20, default='')
    profile_img = models.ImageField(upload_to='profile', default='default-profile.jpg')
    banner_img = models.ImageField(upload_to='banner', default='default_banner.jpg')
    password = models.CharField(max_length=15)
    email = models.EmailField()
    can_follow = models.BooleanField()
    can_search = models.BooleanField()
    QRcode = models.ImageField(upload_to='QR')

    def generate_qr_code(self, url):
        qrcode_img = qrcode.make(url)
        canvas = Image.new('RGB', (300, 300), 'white')
        draw = ImageDraw.Draw(canvas)
        canvas.paste(qrcode_img)

        fname = f'qrcode-{self.id}' + '.png'
        buffer = BytesIO()
        canvas.save(buffer, "PNG")
        self.QRcode.save(fname, File(buffer), save=False)
        canvas.close()


class Follower(models.Model):
    follower = models.CharField(max_length=100)
    user = models.CharField(max_length=100)

    def __str__(self):
        return self.user


class Rate(models.Model):
    rater = models.CharField(max_length=100)
    user = models.CharField(max_length=100)
    rate = models.IntegerField()
