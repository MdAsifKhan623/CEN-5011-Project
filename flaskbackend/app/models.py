from app import db
import datetime
import json

class Country(db.Model):

    __tablename__       = 'country'

    id           = db.Column(db.Integer, primary_key=True)
    date_created = db.Column('date_created', db.DateTime, default=db.func.current_timestamp())
    name            = db.Column('name', db.String(64), nullable=False)
    total_confirmed = db.Column('total_confirmed', db.Integer)
    new_today = db.Column('new_today', db.Integer)
    death_total = db.Column('death_total', db.Integer)
    new_death = db.Column('new_death', db.Integer)

    def __init__(self, **kwargs):

        self.id = kwargs.get('id')
        self.date_created = kwargs.get('date_created')
        self.name = kwargs.get('name')
        self.total_confirmed = kwargs.get('total_confirmed')
        self.new_today = kwargs.get('new_today')
        self.death_total = kwargs.get('death_total')
        self.new_death = kwargs.get('new_death')

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
    total_confirmed = db.Column('total_confirmed', db.Integer)
    new_today = db.Column('new_today', db.Integer)
    death_total = db.Column('death_total', db.Integer)
    new_death = db.Column('new_death', db.Integer)

    def __init__(self, **kwargs):

        self.id = kwargs.get('id')
        self.date_created = kwargs.get('date_created')
        self.name = kwargs.get('name')
        self.total_confirmed = kwargs.get('total_confirmed')
        self.new_today = kwargs.get('new_today')
        self.death_total = kwargs.get('death_total')
        self.new_death = kwargs.get('new_death')

    def update(self, data):
        self.query.update(data)

    def save(self):
        db.session.commit()

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)




