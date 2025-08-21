
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

const username = "Leo";
console.log(greet(username));
