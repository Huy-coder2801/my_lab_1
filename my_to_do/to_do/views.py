from django.shortcuts import render

from django.http import HttpResponse

# Create your views here.
def index(request):
     
    tasks = ['foo', 'bar', 'baz']
     
    return render(request, 'tasks/index.html', {
        'task' : tasks
    })


def add(request):
    return render(request, 'tasks/add.html')

