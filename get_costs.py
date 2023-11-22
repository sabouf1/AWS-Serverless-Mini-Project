import boto3
import datetime
import json

def lambda_handler(event, context):
    # Create a Cost Explorer client
    client = boto3.client('ce')

    # Set the start and end time for the last 24 hours
    end = datetime.datetime.utcnow().date()
    start = end - datetime.timedelta(days=1)

    # Define the time period for the query
    time_period = {
        'Start': start.strftime('%Y-%m-%d'),
        'End': end.strftime('%Y-%m-%d')
    }

    # Define the query parameters
    query = {
        'TimePeriod': time_period,
        'Granularity': 'DAILY',
        'Metrics': ["AmortizedCost", "BlendedCost", "UnblendedCost", "UsageQuantity"]
    }

    # Fetch cost and usage data
    response = client.get_cost_and_usage(**query)

    # Process and format the response as needed
    cost_data = json.dumps(response['ResultsByTime'], indent=4)

    # Return the response with CORS headers
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',  # Adjust as needed (use specific origin for production)
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'GET,OPTIONS'
        },
        'body': cost_data
    }
