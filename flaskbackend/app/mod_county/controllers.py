from app import app
from app import db
from app.models import Country, City
from flask import Blueprint, redirect, url_for, abort, render_template, render_template_string
import requests


mod_auth = Blueprint('county', __name__)

@mod_auth.route('/<state>_<county>', methods=['GET'])
def edit(state, county):

    url = 'https://api.covidactnow.org/v2/counties.json?apiKey=c50a0970b11e4e5698159f28a81e52e3'
    payload = {}
    headers= {}
    response = requests.request("GET", url, headers=headers, data = payload)
    for a in response.json():
        if a['state']==state and a['county']==county:
            return a
    return {}
    
