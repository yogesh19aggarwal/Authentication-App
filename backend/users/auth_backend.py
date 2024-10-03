from django.contrib.auth import get_user_model

User = get_user_model()

class EmailAuthBackend:
    def authenticate(self, request, email=None, password=None):
        try:
            user = User.objects.get(email=email)
            print(f"User found: {user.email}")
            if user.check_password(password):
                print(f"Password matched for {email}")
                return user
            else:
                print(f"Password did not match for {email}")
        except User.DoesNotExist:
            print(f"No user found with email {email}")
            return None
        
    def get_user(self, user_id):
        try:
            return User.objects.get(pk = user_id)
        except User.DoesNotExist:
            return None