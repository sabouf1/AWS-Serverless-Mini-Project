document.addEventListener("DOMContentLoaded", function () {
    // Select the button and textarea elements
    const saveDynamoDBButton = document.getElementById("saveDynamoDBButton");
    const costJsonInput = document.getElementById("costJsonInput");

    // Add a click event listener to the "Save to DynamoDB" button
    saveDynamoDBButton.addEventListener("click", function () {
        // Get the JSON data from the textarea
        const jsonData = costJsonInput.value;

        // Check if the JSON data is empty
        if (!jsonData) {
            alert("Please paste JSON data into the textarea.");
            return;
        }

        // Parse the JSON data
        let parsedData;
        try {
            parsedData = JSON.parse(jsonData);
        } catch (error) {
            alert("Invalid JSON format. Please check your input.");
            return;
        }

        // Perform the DynamoDB POST request
        fetch("https://nj5aol6wg7.execute-api.us-east-1.amazonaws.com/prod/save-to-dynamodb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsedData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Network response was not ok: " + response.statusText);
                }
            })
            .then((data) => {
                // Handle the response here
                console.log(data);
                alert("Data saved to DynamoDB successfully.");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred. Check the console for details.");
            });
    });
});
