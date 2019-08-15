from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.views.generic import TemplateView, RedirectView
from django.template.loader import render_to_string
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse

from .forms import SignupForm, LoginForm, AddBoardTitleForm
from .models import Board


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


class AddBoardView(TemplateView):
    template_name = 'trello/dashboard.html'

    def get(self, *args, **kwargs):
        form = AddBoardTitleForm()
        context = {'form':form}
        return render(self.request, self.template_name, context)

    def post(self, *args, **kwargs):
        form = self.form(self.request.POST)
        title = self.request.POST.get('title')
        context = {'form':form}
        if form.is_valid():
            title = form.save()
            title.save()
            return redirect('board')
        return render(self.request, self.template_name, context)


class LoginView(TemplateView):
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
                return redirect('dashboard') 
            else:
                print("Check username and password")
                return render(self.request, self.template_name, context)
        return render(self.request, self.template_name, context)


class DashBoardView(LoginRequiredMixin, TemplateView):
    """
    Redirect to Login page when user logout.
    """
    login_url = '/login/'
    template_name = 'trello/dashboard.html'
    form = AddBoardTitleForm

    def get(self, *args, **kwargs):
        form = AddBoardTitleForm()
        context = {'form':form}
        return render(self.request, self.template_name, context)

    def post(self, *args, **kwargs):
        form = self.form(self.request.POST)
        title = self.request.POST.get('title')
        context = {'form':form}
        if form.is_valid():
            title = form.save()
            title.save()
            board_title = title.title
            return render('board', {'board_title':board_title})
        return render(self.request, self.template_name, context)


class BoardView(RedirectView):
    template_name = 'trello/board.html'

    """
    Display the current board title
    """

    def get(self, *args, **kwargs):
        title = Board.objects.all()
        context = {'title':title}
        return render(self.request, self.template_name, context)


class LogoutView(RedirectView):
    """
    Logout User
    """

    def get(self, *args, **kwargs):
        logout(self.request)
        return redirect('login')

class PasswordResetView(TemplateView):
    def get(self, *args, **kwargs):
        email = self.request.POST.get('email')
        send_mail(
            'Reset Password',
            'Reset Password',
            'webmaster@localhost',
            email,
            html_content = render_to_string('registration/password_reset_email.html')
        )


    
    
        