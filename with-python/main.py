import requests
from dotenv import load_dotenv
import os

load_dotenv()

query = """query MyQuery {
  myQuery {
    age
    eye_color
    films
    gender
    hair_color
    id
    species
    name
    url
  }
}
"""



url = 'https://mojave.stepzen.net/api/ill-rottweiler/__graphql'

r = requests.post(url, json={'query': query}, headers={'Authorization': os.environ.get("KEY")})
print(r.status_code)
print(r.text)