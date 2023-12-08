from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_restful import Api

app = Flask(__name__)
db = SQLAlchemy()


with app.app_context():
    app.config.from_pyfile('config.py')

    # CORS
    CORS(app)

    # Init databse
    db = SQLAlchemy(app)

    from .api import api_bp, GameApi

    # Initiate flask_restful api
    api = Api(api_bp)
    
    # Api endpoints
    app.register_blueprint(api_bp)

    api.add_resource(GameApi, "/api/games")