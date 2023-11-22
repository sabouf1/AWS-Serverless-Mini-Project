import json
import boto3

def lambda_handler(event, context):
    bucket_name = 'dugs3bucket'  # Replace with your S3 bucket name
    s3 = boto3.client('s3')
    file_structure = []

    paginator = s3.get_paginator('list_objects_v2')
    for page in paginator.paginate(Bucket=bucket_name):
        for obj in page.get('Contents', []):
            file_structure.append({
                'Key': obj['Key'],
                'Size': obj['Size']
            })

    return {
        'statusCode': 200,
        'body': json.dumps(file_structure, indent=4)
    }
