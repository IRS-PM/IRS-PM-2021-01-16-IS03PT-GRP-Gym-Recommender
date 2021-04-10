# Generated by Django 3.1.7 on 2021-04-10 08:56

import AGRApi.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exercise_name', models.CharField(max_length=50, unique=True)),
                ('main_musclegroup', models.CharField(blank=True, max_length=30, null=True)),
                ('detailed_musclegroup', models.CharField(blank=True, max_length=30, null=True)),
                ('other_musclegroups', models.CharField(blank=True, max_length=100, null=True)),
                ('exercise_type', models.CharField(blank=True, max_length=30, null=True)),
                ('mechanics', models.CharField(blank=True, max_length=30, null=True)),
                ('equipment', models.CharField(blank=True, max_length=100, null=True)),
                ('difficulty', models.CharField(blank=True, max_length=20, null=True)),
                ('instruction_text', models.TextField(blank=True, null=True)),
                ('pic_no', models.TextField(blank=True, null=True)),
                ('link_url', models.URLField(blank=True, null=True)),
            ],
            options={
                'db_table': 'EXERCISE',
            },
        ),
        migrations.CreateModel(
            name='Routine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('rate', models.BooleanField(default=False)),
                ('mode', models.IntegerField(default=0)),
            ],
            options={
                'db_table': 'ROUTINE',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=AGRApi.models.generate_unique_code, max_length=6, unique=True)),
                ('fullname', models.CharField(default='Noname', max_length=50)),
                ('DOB', models.CharField(default='010190', max_length=8)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'USER_CREDENTIAL_DATABASE',
            },
        ),
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fitness_level', models.IntegerField(default=0)),
                ('gender', models.CharField(default='', max_length=1)),
                ('goal', models.IntegerField(default=0)),
                ('bmi', models.IntegerField(default=20)),
                ('intensity', models.IntegerField(default=0)),
                ('location', models.IntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.user')),
            ],
            options={
                'db_table': 'USER_DATABASE',
            },
        ),
        migrations.CreateModel(
            name='UserExerciseRating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_score', models.FloatField(default=5)),
                ('exercise_count', models.IntegerField(default=1)),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.exercise')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.userdata')),
            ],
            options={
                'db_table': 'USER_EXERCISE',
            },
        ),
        migrations.CreateModel(
            name='RoutineExercises',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.exercise')),
                ('routine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.routine')),
            ],
            options={
                'db_table': 'ROUTINE_EXERICSE',
            },
        ),
        migrations.AddField(
            model_name='routine',
            name='userdata',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.userdata'),
        ),
    ]
