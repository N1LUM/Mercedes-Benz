from django.db import models

class Sedan(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Sedan'
        verbose_name_plural = 'Sedans'

class Cabriolet(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Cabriolet'
        verbose_name_plural = 'Cabriolets'

class Minivan(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Minivan'
        verbose_name_plural = 'Minivans'

class Eq(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Eq'
        verbose_name_plural = 'Eqs'

class AMG(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'AMG'
        verbose_name_plural = 'AMGs'

class New(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'New'
        verbose_name_plural = 'New'

class Electric(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Electric'
        verbose_name_plural = 'Electric'

class Gazoline(models.Model):
    name = models.CharField('Название',max_length=60)
    price = models.IntegerField('Цена')
    describe = models.TextField('Описание')
    image = models.TextField('Картинка')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Gazoline'
        verbose_name_plural = 'Gazoline'

class News(models.Model):
    title = models.TextField('Название')
    image = models.TextField('Картинка')
    topic = models.TextField('Заголовок')
    describe = models.TextField('Описание')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'News'
        verbose_name_plural = 'News'

class Newses(models.Model):
    title = models.TextField('Название')
    image = models.TextField('Картинка')
    topic = models.TextField('Заголовок')
    describe = models.TextField('Описание')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Newses2021'
        verbose_name_plural = 'Newses2021'

class Newses2020(models.Model):
    title = models.TextField('Название')
    image = models.TextField('Картинка')
    topic = models.TextField('Заголовок')
    describe = models.TextField('Описание')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Newses2020'
        verbose_name_plural = 'Newses2020'


