# import the json utility package since we will be working with a JSON object
import json
# import the AWS SDK (for Python the package name is boto3)
import boto3
# import two packages to help us with dates and date formatting
from time import gmtime, strftime

# create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource('dynamodb')
# use the DynamoDB object to select our table
table = dynamodb.Table('HelloWorldDatabase')
# store the current time in a human readable format in a variable
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())

# define the handler function that the Lambda service will use as an entry point
def update_exercises_handler(event, context):
# extract values from the event object we got from the Lambda service and store in a variable
    name = event['ID']
    personalExercise = event['personalExercise']
    key = {'ID': name}
# write name and time to the DynamoDB table using the object we instantiated and save response in a variable
    response = table.update_item(
            Key=key,
            UpdateExpression="set PersonalExercises = list_append(PersonalExercises, :p)",
            ExpressionAttributeValues={':p': personalExercise},
            ReturnValues="UPDATED_NEW"
        )
# return a properly formatted JSON object
# This shouldn't have been in a github sorry
    return {
        'statusCode': 200,
        'body': json.dumps('Successfully Created New Exercise')
    }