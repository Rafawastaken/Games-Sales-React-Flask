from server import db

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(500), unique = False, nullable = False)
    link = db.Column(db.String(500), unique = False, nullable = False)
    header_img = db.Column(db.String(300), unique = False, nullable = False)
    current_price = db.Column(db.String(7), unique = False, nullable = False)
    lowest_price = db.Column(db.String(7), unique = False, nullable = False)
    

db.create_all()