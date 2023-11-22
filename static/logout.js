function logOut() {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to the logged-out page
    window.location.href = "http://a9a0b8caab82d452e9e195cd3b82ceca-2029017589.us-east-1.elb.amazonaws.com/logged-out";
  }

  // Add click event listener for the logout button
  document.getElementById("logoutButton").addEventListener("click", logOut);