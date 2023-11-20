document.getElementById("fetchButton").addEventListener("click", function() {
    console.log("Button clicked, fetching costs...");

    fetch('https://nj5aol6wg7.execute-api.us-east-1.amazonaws.com/prod')
    .then(response => {
        console.log("Raw Response:", response);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        return response.json();
    })
    .then(data => {
        console.log("Processed Data:", data);

        // Store the data in the fetchedData variable
        fetchedData = data;

        var tableBody = document.getElementById("costTableBody");
        tableBody.innerHTML = ""; // Clear existing data
        data.forEach(item => {
            var row = `<tr>
                <td>${item.TimePeriod.Start} - ${item.TimePeriod.End}</td>
                <td>${item.Total.AmortizedCost.Amount}</td>
                <td>${item.Total.BlendedCost.Amount}</td>
                <td>${item.Total.UnblendedCost.Amount}</td>
                <td>${item.Total.UsageQuantity.Amount}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
        document.getElementById("costTable").style.display = "table";
        
        // Add a debugging statement to indicate when the data is fetched and displayed
        console.log("Data fetched and displayed:", data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Check the console for details.');
    });
});
