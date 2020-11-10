from app import app
from app import db
from app.models import Country, City
from flask import Blueprint, redirect, url_for, abort, render_template, render_template_string
import requests


mod_home = Blueprint('news', __name__)

@mod_home.route('/', methods=['GET'])
def index():

    url = "https://newsapi.org/v2/everything?q=COVID today&sortBy=publishedAt&apiKey=c70b84aa4fde411f808f50858fff1da2&pageSize=100&page=1"
    payload = {}
    headers= {}
    response = requests.request("GET", url, headers=headers, data = payload)
    title = []
    urls = []
    dates = []
    for a in response.json()['articles']:
    title.append(a['title'])
    urls.append(a['url'])
    dates.append(a['publishedAt'])
    return title, urls, dates
