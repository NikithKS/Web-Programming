from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)

class userData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    about = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow) 

    def __repr__(self):
         return 'User ' + str(self.id) 


@app.route("/")
def namaste():
    return render_template('index.html')

@app.route("/<name>")
def helloCust(name):
    if(name == "Nikith"):
        return "Hello Boss"
    else:
        return 'Hello %s!!!' %name

@app.route("/user/<int:uid>")
def userinfo(uid):
    return render_template('users.html', id = uid, db = usersdb)

@app.route("/new", methods=['GET', 'POST'])
def newuser():
    if request.method == 'POST':
        nm = request.form['name']
        abt = request.form['about']
        new_u = userData(name=nm, about = abt)
        db.session.add(new_u)
        db.session.commit()
        return redirect('/new')
    else:
        allU = userData.query.all()
        return render_template('new.html', users=allU)


        


if __name__ == "__main__":
    app.run(debug = True)
