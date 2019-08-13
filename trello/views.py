from django.contrib.auth import authenticate
from django.views.generic import TemplateView
from django.shortcuts import render 

from .forms import SignupForm
from .forms import LoginForm

class SignupView(TemplateView):
    form = SignupForm
    template_name = 'trello/signup.html'

    def get(self, *args, **kwargs):
        form = SignupForm()
        context = {'form':form}
        return render(self.request, self.template_name, context)

    def post(self, *args, **kwargs):
        form = self.form(self.request.POST)
        if form.is_valid():
            myuser = form.save()
            return redirect('login')

class LoginView(TemplateView):
    form = LoginForm
    template_name = 'trello/login.html'
    
    def get(self, *args, **kwargs):
        form = LoginForm()
        context = {'form':form}
        return render(self.request, self.template_name, context)

    def post(self, *args, **kwargs):
        form = self.form(self.request.POST)
        context = {'form':form}
        if form.is_valid():
            user = authenticate(self.request, username=form.username, password=form.password)
            if user is not None:
                login(self.request, user)
                redirect('dashboard')