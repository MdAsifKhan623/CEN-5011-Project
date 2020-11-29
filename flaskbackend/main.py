from flask import Flask
import boto3
import requests
import flask
from flask_cors import CORS
import sys

app=Flask(__name__)
CORS(app)
dynamoDB=boto3.resource('dynamodb')
dynamoTable=dynamoDB.Table('TestingCenters_Table')
# result=requests.get('https://covid-19-testing.github.io/locations/new_hampshire/complete.json')

# dynamoTable.put_item(
#     Item={
#         'id':"newhampshire",
#         'data':result.json()
#     }
# )



@app.route("/home", methods=['GET'])
def main():
    return {
        'id':"1",
        'data':"Hello Novak"
    }
@app.route("/testing", methods=['POST'])
def testingSite():
    # print(flask.request.get_json())
    primary_column_name='id'
    stateName=flask.request.get_json()['state']
    print(stateName)
    if stateName:
        response=dynamoTable.get_item(
            Key={primary_column_name:stateName}
        )
        return response
