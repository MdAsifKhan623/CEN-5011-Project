from flask import Flask
import boto3
import requests

app=Flask(__name__)

# dynamoDB=boto3.resource('dynamodb')
# dynamoTable=dynamoDB.Table('TestingCenters_Table')

# dynamoTable.put_item(
#     Item={
#         'id':"oklahoma",
#         'data':result.json()
#     }
# )
# @app.route('/site',methods=['POST'])
# def stateSites():


@app.route("/home", methods=['GET'])
def main():
    return {
        'id':"1",
        'data':result.json()
    }
@app.route("/testing-site", methods=['GET'])
def testingSite():
    
from app import app
