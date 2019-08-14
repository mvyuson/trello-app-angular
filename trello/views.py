from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.views.generic import TemplateView, RedirectView
from django.shortcuts import redirect
from django.shortcuts import render 
from django.urls import reverse

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
        #import pdb; pdb.set_trace()
        if form.is_valid():
            myuser = form.save()
            myuser.save()
            return redirect('login')
        context = {'form':form}
        return render(self.request, self.template_name, context)

class LoginView(TemplateView):
    ''' Add 'Forgot Password' feature '''
    form = LoginForm
    template_name = 'trello/login.html'
    
    def get(self, *args, **kwargs):
        form = LoginForm()
        context = {'form':form}
        return render(self.request, self.template_name, context)

    def post(self, *args, **kwargs):
        form = self.form(self.request.POST)
        username = self.request.POST.get('username')
        password = self.request.POST.get('password')
        context = {'form':form}
        if form.is_valid():
            user = authenticate(self.request, username=username, password=password)
            if user is not None:
                login(self.request, user)
                return render(self.request, "trello/dashboard.html", context)
            else:
                print("Check username and password")
                return render(self.request, self.template_name, context)
        return render(self.request, self.template_name, context)

class LogoutView(RedirectView):
    def get(self, *args, **kwargs):
        logout(request)
        