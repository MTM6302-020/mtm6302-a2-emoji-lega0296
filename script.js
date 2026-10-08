const emojiCodes = [
  128512, 128513, 128514, 128515, 128516, 128517, 128518, 128519, 128520,
  128521, 128522, 128523,
];

const container = document.getElementById("container");
const emojiCards = document.getElementById("emoji-cards");

emojiCodes.forEach((code) => {
  const emoji = String.fromCodePoint(code);
  const emojiCard = document.createElement("div");
  emojiCard.textContent = emoji;
  emojiCards.appendChild(emojiCard);
});
