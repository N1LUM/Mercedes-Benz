# Generated by Django 4.1.7 on 2023-04-04 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Newses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(verbose_name='Название')),
                ('image', models.TextField(verbose_name='Картинка')),
                ('topic', models.TextField(verbose_name='Заголовок')),
                ('describe', models.TextField(verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Newses',
                'verbose_name_plural': 'Newses',
            },
        ),
    ]
