from django.shortcuts import render
from django.http import HttpResponse
import requests
import os

from .models import Greeting

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    
    # r = requests.get('https://httpbin.org/status/418')
    # print(r.text)
    # return HttpResponse('<pre>' + r.text + '</pre>')

    # times = int(os.environ.get('TIMES', 3))
    # return HttpResponse('Hello! ' * times)
    
    return render(request, "index.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})

def bikini(request):
    return render(request, "bikini.html")

def infiltration(request):
    return render(request, "infiltration.html")