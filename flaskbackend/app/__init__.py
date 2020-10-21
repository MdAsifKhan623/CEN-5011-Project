from flask import Flask

app = Flask(__name__, instance_relative_config=True, static_folder='static')


app.config.from_pyfile('config.py')

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app.mod_home.controllers import mod_home
app.register_blueprint(mod_home)


@app.shell_context_processor
def make_shell_context():
    from models import City, Country, CountryData, CityData
    return {'db': db, 'City': City, 'Country': Country, 'CountryData': CountryData, \
            'CityData': CityData}

