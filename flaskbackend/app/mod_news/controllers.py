from app import app
from app import db
from app.models import Country, City
from flask import Blueprint, redirect, url_for, abort, render_template, render_template_string
import requests


mod_auth = Blueprint('news', __name__)

@mod_auth.route('/', methods=['GET'])
def index():
    url = "https://newsapi.org/v2/everything?q=COVID+vaccine+today&sortBy=publishedAt&apiKey=c70b84aa4fde411f808f50858fff1da2&pageSize=100&page=1"
    payload = {}
    headers= {}
    response = requests.request("GET", url, headers=headers, data = payload)
    a = response.json()['articles'][0:20]
    b = {}
    b['response'] = a
    return b
    
