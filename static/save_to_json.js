document.getElementById("saveJsonButton").addEventListener("click", function() {
    console.log("Button clicked, saving data to JSON...");

    // Check if fetchedData is available to save
    if (fetchedData) {
        // Convert the fetchedData to a JSON string
        var jsonData = JSON.stringify(fetchedData, null, 2);

        // Create a Blob with the JSON data
        var blob = new Blob([jsonData], { type: "application/json" });

        // Create a download link for the JSON file
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "aws_costs.json";
        document.body.appendChild(a);

        // Trigger a click event on the download link to initiate the download
        a.click();

        // Remove the download link
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        console.log("Data saved to JSON successfully.");
    } else {
        console.error("No data to save.");
        alert("No data available to save. Fetch data first.");
    }
});
