# Generated by Django 3.1.7 on 2021-02-28 15:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('AGRApi', '0003_auto_20210228_2320'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userdata',
            old_name='user_id',
            new_name='user',
        ),
    ]