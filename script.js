function showSurprise(num) {
  const surprise = document.getElementById('surprise');
  const surpriseImage = document.getElementById('surpriseImage');
  const surpriseQuote = document.getElementById('surpriseQuote');

  let imagePath = "";
  let quoteText = "";

  if (num === 1) {
    imagePath = "balloons.png";
    quoteText = "🎈 May your life be filled with as much happiness as you bring to everyone around you. Today is all about YOU — shine bright!";
  } 
  else if (num === 2) {
    imagePath = "gift.png";
    quoteText = "🎁 Life is a gift, and you are one of the finest treasures in it. May your birthday unwrap joy, love, and endless blessings.";
  } 
  else if (num === 3) {
    imagePath = "smile.png";
    quoteText = "😊 Your smile is more beautiful than any sunrise. Keep inspiring, keep dreaming, and keep lighting up the world!";
  } 
  else if (num === 4) {
    imagePath = "confetti.png";
    quoteText = "✨ Here’s to another year of laughter, adventures, and unforgettable moments. You’re not just older — you’re even more legendary!";
  }
  else if (num === 5) {
    imagePath = "star.png";
    quoteText = "🌟 You’re a rare gem — unique, brilliant, and truly priceless. The world is better because you’re in it. Happy Birthday!";
  }

  surpriseImage.src = imagePath;
  surpriseQuote.textContent = quoteText;
  surprise.classList.remove('hidden');
}