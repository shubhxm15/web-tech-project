function runXSS() {
  const input = document.getElementById("xss-input").value;

  // Regular expression to extract text between alert('') or alert("")
  const alertRegex = /alert\([ '"](.+?)[ '"]\)/i;
  const match = input.match(alertRegex);

  if (match) {
    // If an alert payload is found, display the extracted text in a popup
    alert(match[1]); // The text inside alert() is in match[1]
  } else {
    alert("No valid alert payload found or script is malformed.");
  }
}

function simulateDDoS() {
  const output = document.getElementById("ddos-output");
  output.innerHTML = "Simulating a flood of requests...";

  let requestCount = 0;
  const interval = setInterval(() => {
    requestCount++;
    output.innerHTML = `Requests sent: ${requestCount}`;
    if (requestCount >= 100) {
      // Limit to 100 requests for demonstration
      clearInterval(interval);
      output.innerHTML += "<br>Simulation complete.";
    }
  }, 50); // Sends a request every 50ms
}

function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  // Check login credentials (for demo purposes)
  if (
    (userId === "1" && password === "password123") ||
    (userId === "2" && password === "password123")
  ) {
    window.location.href = `user${userId}.html`; // Redirect to respective user page
  } else {
    alert("Invalid User ID or Password"); // Show error for invalid login
  }
}
