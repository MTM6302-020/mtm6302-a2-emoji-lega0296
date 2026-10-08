const emojiCodes = [
  128512, 128513, 128514, 128515, 128516, 128517, 128518, 128519, 128520,
  128521, 128522, 128523,
];

const container = document.getElementById("container");
const emojiCards = document.getElementById("emoji-cards");

function showEmojis(count = emojiCodes.length) {
  emojiCards.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const emoji = String.fromCodePoint(emojiCodes[i]);
    const emojiCard = document.createElement("div");
    emojiCard.textContent = emoji;
    emojiCards.appendChild(emojiCard);
  }
}

showEmojis(4); // Show 4 emojis by default
