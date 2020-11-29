import boto3
import requests


result=requests.get('https://covid-19-testing.github.io/locations/north_carolina/complete.json')
print(result.json())
dynamoDB=boto3.resource('dynamodb')
dynamoTable=dynamoDB.Table('TestingCenters_Table')

dynamoTable.put_item(
    item={
        'id':"1",
        'data':result.json()
    }
)