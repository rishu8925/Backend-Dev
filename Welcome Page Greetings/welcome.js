$(document).ready(function () {

  // -----------------------------
  // 1. TIME-BASED GREETING
  // -----------------------------
  function getTimeGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning!";
    else if (hour < 18) return "Good Afternoon!";
    else return "Good Evening!";
  }

  // Set greeting on page load
  $("#greetingText").text(getTimeGreeting());



  // -----------------------------
  // 2. CHANGE GREETING BUTTON
  // -----------------------------
  $("#changeGreetingBtn").click(function () {
    // Replace greeting with motivational quote
    const quotes = [
      "Believe you can and you're halfway there.",
      "Success starts with self-discipline.",
      "Dream big and dare to fail.",
      "Stay positive, work hard, make it happen.",
      "Every day is a second chance."
    ];

    // Display a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#greetingText").text(randomQuote);
  });



  // -----------------------------
  // 3. TOGGLE WELCOME MESSAGE
  // -----------------------------
  $("#toggleWelcomeBtn").click(function () {
    // jQuery's .toggle() smoothly hides/shows the element
    $("#welcomeMessage").toggle();
  });



  // -----------------------------
  // 4. ALERT ON CLICKING GREETING
  // -----------------------------
  $("#greetingText").click(function () {
    alert("You clicked the greeting!");
  });

});
