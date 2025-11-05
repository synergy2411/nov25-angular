const LUCKY_NUMBER = Math.round(Math.random() * 100);

function getLuckyNumber() {
  return LUCKY_NUMBER;
}

function getDailyRoutine() {
  return "Run 5 miles today!";
}

// Default Export
export default function getDailyQuote() {
  return "Something big is coming up!";
}

// Named Export
export { getLuckyNumber, getDailyRoutine };
