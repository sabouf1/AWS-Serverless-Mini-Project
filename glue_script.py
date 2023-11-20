import sys
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from pyspark.sql import SparkSession
from pyspark.sql.functions import col

# Initialize Spark session
sc = SparkContext()
spark = SparkSession(sc)

# Hardcoded source and destination S3 bucket names
source_bucket = "dugs3bucket"
dest_bucket = "muhammadazammetro"

# Read data from S3
data = spark.read.text(f"s3://{source_bucket}/input/data.txt")

# Transform data (example: convert text to uppercase)
transformed_data = data.select(col("value").cast("string").alias("data")).selectExpr("upper(data) as transformed_data")

# Write transformed data back to S3
transformed_data.write.mode("overwrite").text(f"s3://{dest_bucket}/output/transformed_data.txt")

# Stop the Spark session
spark.stop()
