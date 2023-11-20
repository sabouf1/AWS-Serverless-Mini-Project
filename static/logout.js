function logOut() {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to the logged-out page
    window.location.href = "http://localhost:5000/logged-out";
  }

  // Add click event listener for the logout button
  document.getElementById("logoutButton").addEventListener("click", logOut);