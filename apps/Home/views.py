from django.shortcuts import render, redirect, HttpResponse


def index(request):
    
    return render(request, "Home/index.html")

# def mean(request):
#     return redirect(request.META.get('http_referer','http://54.190.27.117/'))