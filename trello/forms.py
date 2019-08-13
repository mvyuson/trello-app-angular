from django import forms
from .models import User

class SignupForm(forms.Form):
    first_name = forms.CharField(max_length=30)
    last_name = forms.CharField(max_length=30)
    username = forms.CharField(max_length=30)
    email = forms.CharField(max_length=30)
    first_password = forms.CharField(max_length=30)
    second_password = forms.CharField(max_length=30)

    def clean_username(self):
        username = self.cleaned_data['username']
        user = User.objects.filter(username=username)
        if user.exists():
            raise form.ValidationError('Username already taken')
        return username
    
    def clean_email(self):
        email = self.cleaned_data['email']
        user = User.objects.filter(email=email)
        if user.exists():
            raise form.ValidationError('Email already taken')
        return email

    def clean_password(self):
        first_password = self.cleaned_data['first_password']
        second_password = self.cleaned_data['second_password']
        if first_password != second_password:
            raise form.ValidationError('Password mismatched')
        
        return first_password

    def save(self, cleaned_data):
        first_name = self.cleaned_data['first_name']
        last_name = self.cleaned_data['last_name']
        username = self.cleaned_data['username']
        email = self.cleaned_data['email']
        first_password = self.cleaned_data['first_password']
        second_password = self.cleaned_data['first_password']
        return user

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField()
