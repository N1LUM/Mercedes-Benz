from django.shortcuts import render,redirect
from .forms import UserCreationForm
from django.contrib.auth import authenticate,login
from django.views import View
from .models import Sedan
from .models import Cabriolet
from .models import Minivan
from .models import Eq
from .models import AMG
from .models import New
from .models import Electric
from .models import Gazoline
from .models import Newses
from .models import Newses2020


def index (request):
    sedan  = Sedan.objects.all()
    cabriolet  = Cabriolet.objects.all()
    minivan  = Minivan.objects.all()
    eq  = Eq.objects.all()
    amg  = AMG.objects.all()
    new  = New.objects.all()
    electric = Electric.objects.all()
    gazoline = Gazoline.objects.all()
    return render(request, 'main/index.html', {'sedan':sedan,'cabriolet':cabriolet,'minivan':minivan,'eq':eq,'amg':amg,'new':new, 'electric':electric,'gazoline':gazoline,})

def electro(request):
    return render(request, 'technology/electro.html')

def provodnik(request):
    return render(request, 'technology/provodnik.html')

def mbux(request):
    return render(request, 'technology/mbux.html')

def progress(request):
    return render(request, 'technology/progress.html')

def new(request):
    new  = New.objects.all()
    return render(request, 'auto/new.html', {'new':new} )

def sedan(request):
    sedan  = Sedan.objects.all()
    return render(request, 'auto/sedan.html', {'sedan':sedan} )

def cabriolet(request):
    cabriolet  = Cabriolet.objects.all()
    return render(request, 'auto/cabriolet.html', {'cabriolet':cabriolet} )

def minivan(request):
    minivan  = Minivan.objects.all()
    return render(request, 'auto/minivan.html', {'minivan':minivan} )

def history(request):
    return render(request, 'world_of_mercedes/history.html')

def news(request):
    newses  = Newses.objects.all()
    newses2020  = Newses2020.objects.all()
    return render(request, 'world_of_mercedes/news.html',{'newses':newses,'newses2020':newses2020})



# Create your views here.

class Register(View):
    template_name = 'registration/register.html'
    def get(self, request):
        context = {
            'form': UserCreationForm()
        }
        return render(request, self.template_name, context)
    
    def post (self, request):
        form = UserCreationForm(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username,password=password)
            login(request,user)
            return redirect('/')
        context = {
            'form': form
        }
        return render(request, self.template_name, context)
            