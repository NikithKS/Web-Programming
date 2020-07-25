from flask import *

usersdb  = [
    {'username' : 'Niki',
    'ID' : 101},
    {'username' : 'En',
    'ID' : 102},
    {'username' : 'El',
    'ID' : 103}
]

app = Flask(__name__)
@app.route("/")
def namaste():
    return render_template('index.html')

@app.route("/user/<int:uid>")
def userinfo(uid):
    return render_template('users.html', id = uid, db = usersdb)

@app.route("/hello/<user>")
def hello(user):
    return 'Hello %s!!!' %user

@app.route("/<name>")
def helloCust(name):
    if(name == "Nikith"):
        return "Hello Boss"
    else:
        return redirect(url_for('hello', user = name))


if __name__ == "__main__":
    app.run(debug = True)
