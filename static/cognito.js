// // Function to check if a query parameter is present in the URL
// function getParameterByName(name, url) {
// if (!url) url = window.location.href;
// name = name.replace(/[\[\]]/g, "\\$&");
// var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//     results = regex.exec(url);
// if (!results) return null;
// if (!results[2]) return '';
// return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// // Check if the 'sessionCount' variable is in session storage
// var sessionCount = sessionStorage.getItem('sessionCount');

// if (sessionCount === null) {
// // If 'sessionCount' is not in session storage, set it to 1 and redirect to hosted UI
// sessionStorage.setItem('sessionCount', 1);
// window.location.href = "https://mycloudproject.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=4hafed1oaoo9b4cesh8opmiman&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fa9a0b8caab82d452e9e195cd3b82ceca-2029017589.us-east-1.elb.amazonaws.com";
// } else if (getParameterByName('code')) {
// // If 'code' query parameter is present, it means the user has logged in successfully, so redirect to the app
// window.location.href = "http://a9a0b8caab82d452e9e195cd3b82ceca-2029017589.us-east-1.elb.amazonaws.com";
// }