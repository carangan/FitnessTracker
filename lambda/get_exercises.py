# import the json utility package since we will be working with a JSON object
import json
# import the AWS SDK (for Python the package name is boto3)
import boto3

# create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource('dynamodb')
# use the DynamoDB object to select our table
table = dynamodb.Table('HelloWorldDatabase')

# define the handler function that the Lambda service will use as an entry point
def get_handler(event, context):
# extract values from the event object we got from the Lambda service and store in a variable
    name = event['ID']
    key = {'ID': name}
# write name and time to the DynamoDB table using the object we instantiated and save response in a variable
    response = table.get_item(
            Key=key
        )
        
    if 'Item' in response:
        return {
        'statusCode': 200,
        'body': response['Item']['PersonalExercises']
    }
    
    return {
        'statusCode': 502,
        'body': json.dumps("Key not found")
    }