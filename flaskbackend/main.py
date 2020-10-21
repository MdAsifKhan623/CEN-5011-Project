from flask import Flask

app=Flask(__name__)

@app.route("/home", methods=['GET'])
def main():
    return {
        "uid":1,
        'title':"covid dashboard"
    }
from app import app
