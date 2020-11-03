from app import app
from app import db
from app.models import Country, City
from flask import Blueprint, redirect, url_for, abort, render_template, render_template_string
import requests


mod_home = Blueprint('home', __name__)

@mod_home.route('/home', methods=['GET'])
def index():

    payload = {}
    headers = {}
    d = requests.request("GET", 'https://api.covid19api.com/summary', headers=headers, data = payload)
    dates = d.json()
    country={}
    country['name'] = 'Global'
    country['total_confirmed'] = dates['Global']['TotalConfirmed']
    country['new_today'] = dates['Global']['NewConfirmed']
    country['death_total'] = dates['Global']['TotalDeaths']
    country['new_death'] = dates['Global']['NewDeaths']
    country_db = Country(**country)
    country_db.save()
    for a in dates['Countries']:
        country = {}
        country['name'] = a['Country']
        country['total_confirmed'] = a['TotalConfirmed']
        country['new_today'] = a['NewConfirmed']
        country['death_total'] = a['TotalDeaths']
        country['new_death'] = a['NewDeaths']
        country_db = Country(**country)
        country_db.save()
    b = requests.request('GET', ' https://api.covidtracking.com/v1/states/current.json')
    b = b.json()
    for a in b:
        us_city = {}
        us_city['name'] = a['state']
        us_city['total_confirmed'] = a['positive']
        us_city['new_today'] = a['positiveIncrease']
        us_city['death_total'] = a['death']
        us_city['new_death'] = a['deathIncrease']
        city_db = City(**us_city)
        city_db.save()
    return a