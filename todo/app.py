from flask import Flask, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCEHMY_DATABASE_URI'] = 'sqlite:///items.db'

db = SQLAlchemy(app)

class items(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    task = db.Column(db.Text, nullable = True)
    date = db.Column(db.DateTime, nullable = False, default = datetime.utcnow)


    def __repr__(self):
        return 'Task' + str(self.id)


@all.route("/")
def home():
    

