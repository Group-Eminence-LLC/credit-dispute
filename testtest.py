import requests
import time

url = "http://127.0.0.1:8000/api/auth/signup/"
data = {
    "email": "newuser@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "password": "securepassword"
}

for i in range(6):
    response = requests.post(url, json=data)
    print(f"Request {i+1}: Status Code {response.status_code}, Response {response.json()}")
    time.sleep(1)  # Sleep for 1 second between requests

