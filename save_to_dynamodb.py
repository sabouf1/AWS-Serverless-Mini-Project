import json
import boto3

def lambda_handler(event, context):
    # Initialize DynamoDB client
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('AWSCosts')  # DynamoDB table name

    # Parse the JSON data from the event
    try:
        data_to_save = json.loads(event.get('body', '{}'))
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps('Invalid JSON format in body')
        }

    # Construct the TimePeriod key
    time_period = data_to_save.get('TimePeriod', {})
    start_date = time_period.get('Start')
    end_date = time_period.get('End')
    if not start_date or not end_date:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps('Missing TimePeriod Start or End in body')
        }

    time_period_key = f"{start_date}_{end_date}"

    # Prepare the item to be saved in DynamoDB
    total = data_to_save.get('Total', {})
    item = {
        'TimePeriod': time_period_key,
        'AmortizedCost': total.get('AmortizedCost', {}).get('Amount'),
        'BlendedCost': total.get('BlendedCost', {}).get('Amount'),
        'UnblendedCost': total.get('UnblendedCost', {}).get('Amount'),
        'UsageQuantity': total.get('UsageQuantity', {}).get('Amount'),
        'Estimated': data_to_save.get('Estimated')
    }

    # Insert data into DynamoDB
    try:
        table.put_item(Item=item)
        return_message = 'Data saved successfully'
        status_code = 200
    except Exception as e:
        return_message = f"Error saving data: {str(e)}"
        status_code = 500

    # Return the response with CORS headers
    return {
        'statusCode': status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',  # Adjust as needed for production
            'Access-Control-Allow-Methods': 'POST,OPTIONS'
        },
        'body': json.dumps(return_message)
    }
