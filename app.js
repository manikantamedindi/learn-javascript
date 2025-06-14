function getAccessToken(authCode) {
  const url = "http://accounts.zoho.in/oauth/v2/token";
  const params = new URLSearchParams({
    client_id: "1000.MACSI77TOHTWUVLWE9LX0JYXU8IQ3K",
    client_secret: "7e170f38ede8dcb466406da894cbcab6cc1c0dc64c",
    code: "1000.8535d2df21b6c47f9d247abbcc84b89f.c0f920b0bfcb8dcb17f045ea4b7a4ede",
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:5001/callback.html",
  });

  fetch("https://cors-anywhere.herokuapp.com/https://www.zohoapis.in/invoice/v3/contacts?organization_id=60012219261", {
    method: "GET",
    headers: {
      Authorization: `Bearer YOUR_ACCESS_TOKEN`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log("Customer List:", data))
    .catch((error) => console.error("Error:", error));
}

// Replace with actual authorization code from step 2
getAccessToken("YOUR_AUTHORIZATION_CODE");
