# Generated by Django 3.1.7 on 2021-03-06 15:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('AGRExercises', '0002_auto_20210306_0942'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='pic_url',
            new_name='pic_no',
        ),
    ]