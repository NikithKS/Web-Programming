from flask import Flask, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///items.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todoItems.db'

db = SQLAlchemy(app)

class items(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    task = db.Column(db.Text, nullable = True)
    date = db.Column(db.DateTime, nullable = False, default = datetime.now())
    status = db.Column(db.Integer, default = 0)


    def __repr__(self):
        return 'Task' + str(self.id)


@app.route("/")
def home():
    content = items.query.all()
    return render_template('main.html', data = content[::-1])

@app.route("/new", methods = ['POST'])
def addnew():
    if request.method == 'POST':
        pass
    else:
        return render_template('new.html')


@app.route("/edit/<int:current_id>", methods = ["POST"])
def edit(current_id):
    if request.method == 'POST':
        pass
    else:
        info = items.query.all()[current_id]
        return render_template('editor.html', item = info)


if __name__ == "__main__":
    app.run(debug = True)