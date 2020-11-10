from flask import Flask

app = Flask(__name__, instance_relative_config=True, static_folder='static')


app.config.from_pyfile('config.py')

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app.mod_home.controllers import mod_home
app.register_blueprint(mod_home)

from app.mod_news.controllers import mod_auth as auth_module
app.register_blueprint(auth_module, url_prefix='/news')

@app.shell_context_processor
def make_shell_context():
    from models import City, Country
    return {'db': db, 'City': City, 'Country': Country}
