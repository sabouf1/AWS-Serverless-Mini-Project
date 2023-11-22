function logOut() {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to the logged-out page
    window.location.href = "http://a93a9b6a6f55d4d5b84e861039f6ddc1-1492173285.us-east-1.elb.amazonaws.com/logged-out";
  }

  // Add click event listener for the logout button
  document.getElementById("logoutButton").addEventListener("click", logOut);