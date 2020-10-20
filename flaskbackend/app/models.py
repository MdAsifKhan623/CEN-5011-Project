from app import db
import datetime
import json

class Package(db.Model):

    __tablename__       = 'country'

    id           = db.Column(db.Integer, primary_key=True)
    date_created = db.Column('date_created', db.DateTime, default=db.func.current_timestamp())
    name            = db.Column('name', db.String(64), nullable=False)

    def __init__(self, **kwargs):

        self.id = kwargs.get('id')
        self.date_created = kwargs.get('date_created')
        self.name = kwargs.get('name')

    def update(self, data):
        self.query.update(data)

    def save(self):
        db.session.commit()

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class City(db.Model):

    __tablename__       = 'city'

    id           = db.Column(db.Integer, primary_key=True)
    date_created = db.Column('date_created', db.DateTime, default=db.func.current_timestamp())
    name            = db.Column('name', db.String(64), nullable=False)
    country_id                = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    country               = db.relationship('Country', backref='_cities', foreign_keys=[country_id], lazy=True)

    def __init__(self, **kwargs):

        self.id = kwargs.get('id')
        self.date_created = kwargs.get('date_created')
        self.name = kwargs.get('name')
        self.country_id = kwargs.get('country_id')

    def update(self, data):
        self.query.update(data)

    def save(self):
        db.session.commit()

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class CountryData(db.Model):

    __tablename__       = 'country_data'

    id           = db.Column(db.Integer, primary_key=True)
    date_created = db.Column('date_created', db.DateTime, default=db.func.current_timestamp())
    country_id                = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    total_inf = db.Column(db.Integer, default=0, nullable=True)
    total_death = db.Column(db.Integer, default=0, nullable=True)

    country               = db.relationship('Country', backref='_countries_data', foreign_keys=[country_id], lazy=True)

    def __init__(self, **kwargs):

        self.id = kwargs.get('id')
        self.date_created = kwargs.get('date_created')
        self.name = kwargs.get('name')
        self.country_id = kwargs.get('country_id')
        self.total_inf = kwargs.get('total_inf')
        self.total_death = kwargs.get('total_death')


    def update(self, data):
        self.query.update(data)

    def save(self):
        db.session.commit()

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class CityData(db.Model):

    __tablename__       = 'city_data'

    id           = db.Column(db.Integer, primary_key=True)
    date_created = db.Column('date_created', db.DateTime, default=db.func.current_timestamp())
    city_id                = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)
    total_inf = db.Column(db.Integer, default=0, nullable=True)
    total_death = db.Column(db.Integer, default=0, nullable=True)

    city               = db.relationship('City', backref='_cities_data', foreign_keys=[city_id], lazy=True)

    def __init__(self, **kwargs):

        self.id = kwargs.get('id')
        self.date_created = kwargs.get('date_created')
        self.name = kwargs.get('name')
        self.country_id = kwargs.get('country_id')
        self.total_inf = kwargs.get('total_inf')
        self.total_death = kwargs.get('total_death')


    def update(self, data):
        self.query.update(data)

    def save(self):
        db.session.commit()

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

