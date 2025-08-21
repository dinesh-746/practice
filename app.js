
function greet(name) {
  const hours = new Date().getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return `Good ${timeOfDay}, ${name}!`;
}

function getQuote() {
  const quotes = [
    "Keep pushing forward 🚀",
    "Stay positive, work hard, make it happen",
    "Believe you can and you're halfway there",
    "Success is no accident",
    "Dream big. Work hard. Stay focused"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const username = "Leo";
console.log(greet(username));
console.log(getQuote());
