from app import app
from flask import Blueprint, redirect, url_for, abort, render_template, render_template_string
import requests

mod_home = Blueprint('home', __name__)

@mod_home.route('/home', methods=['GET'])
def index():
	url = "https://api.covid19api.com/country/south-africa/status/confirmed"
    payload = {}
    headers= {}
    d = requests.request("GET", url, headers=headers, data = payload)
    Country = []
    Date = []
    Count = []
    for dates in d.json():
        Country.append(dates['Country'])
        #Date.append(dates[''])
        Count.append(dates['Cases'])

	a = { "uid":1, 'title':"coviddashboard", "total":sum(Count)}
	return a