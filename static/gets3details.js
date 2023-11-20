// Function to make a GET request to retrieve a list of S3 buckets
function getS3Buckets() {
    // Make a GET request to the API Gateway
    fetch('https://nj5aol6wg7.execute-api.us-east-1.amazonaws.com/prod/get-s3')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Display the retrieved data in an alert
            alert(JSON.stringify(data, null, 2));
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Check the console for details.');
        });
}

// Attach a click event handler to the "Get S3 Buckets" button
document.getElementById("getS3BucketsButton").addEventListener("click", getS3Buckets);
