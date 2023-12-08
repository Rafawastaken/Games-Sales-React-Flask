from server import db
from flask import Blueprint, jsonify
from flask_restful import Resource, reqparse, abort, marshal_with, fields
from .models import Game

# Api blueprint
api_bp = Blueprint('api', __name__)

game_resource_fields = {
    "id":fields.Integer,
    "name":fields.String,
    "link":fields.String,
    "header_img":fields.String,
    "current_price":fields.String,
    "lowest_price":fields.String, 
}


class GameApi(Resource):
    @marshal_with(game_resource_fields)
    def get(self):
        games = Game.query.all()
        return games, 200

    @marshal_with(game_resource_fields)
    def post(self):
            parser = reqparse.RequestParser()
            parser.add_argument('name', type=str, required=True, help='Name is required')
            parser.add_argument('link', type=str, required=True, help='Link is required')
            parser.add_argument('header_img', type=str, required=True, help='Header image URL is required')
            parser.add_argument('current_price', type=str, required=True, help='Current price is required')
            parser.add_argument('lowest_price', type=str, required=True, help='Lowest price is required')

            args = parser.parse_args()

            # Create a new Game object
            new_game = Game(
                name=args['name'],
                link=args['link'],
                header_img=args['header_img'],
                current_price=args['current_price'],
                lowest_price=args['lowest_price']
            )

            # Add the new game to the database
            db.session.add(new_game)
            db.session.commit()

            return new_game, 201