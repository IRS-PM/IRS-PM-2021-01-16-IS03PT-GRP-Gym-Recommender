# Generated by Django 3.1.7 on 2021-03-03 16:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('AGRApi', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exercise_name', models.CharField(max_length=50, unique=True)),
                ('main_musclegroup', models.CharField(max_length=30)),
                ('detailed_musclegroup', models.CharField(max_length=30)),
                ('other_musclegroups', models.CharField(max_length=100)),
                ('exercise_type', models.CharField(max_length=30)),
                ('mechanics', models.CharField(max_length=30)),
                ('equipment', models.CharField(max_length=100)),
                ('difficulty', models.CharField(max_length=20)),
                ('instruction_text', models.TextField()),
                ('pic_url', models.TextField()),
                ('link_url', models.URLField()),
            ],
            options={
                'db_table': 'EXERCISE',
            },
        ),
        migrations.CreateModel(
            name='Routine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('set_id', models.IntegerField()),
                ('date', models.DateField()),
                ('userdata', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.userdata')),
            ],
            options={
                'db_table': 'ROUTINE',
            },
        ),
        migrations.CreateModel(
            name='UserExerciseRating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_score', models.FloatField(default=5)),
                ('exercise_count', models.IntegerField(default=1)),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRExercises.exercise')),
                ('userdata', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRApi.userdata')),
            ],
            options={
                'db_table': 'USER_EXERCISE',
            },
        ),
        migrations.CreateModel(
            name='RoutineExercises',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRExercises.exercise')),
                ('set_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AGRExercises.routine')),
            ],
            options={
                'db_table': 'ROUTINE_EXERICSE',
            },
        ),
    ]