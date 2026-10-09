// CREATE an array of at least 12 emoji codes

const emojiCodes = [
  128512, 128513, 128514, 128515, 128516, 128517, 128518, 128519, 128520,
  128521, 128522, 128523, 128545, 128561, 128566,
];

// FIND the gallery container
const container = document.getElementById("container");
const emojiCards = document.getElementById("emoji-cards");

// DEFINE showEmojis(count)

showEmojis((count = 14));

// DEFAULT count to the array's length

function showEmojis(count = emojiCodes.length) {
  emojiCards.innerHTML = "";
  for (let i = 0; i < count; i++) {
    addEmojiCard(emojiCodes[i]);
  }
}

// CLEAR the existing gallery

const clearGallery = () => {
  emojiCards.innerHTML = "";
};

//  REPEAT count times, starting at array index zero
emojiCards.tabIndex = 0;

// READ the emoji code at the current index
emojiCodes.forEach((code) => {
  addEmojiCard(code);
});

// CREATE a card containing the emoji and its code

function createEmojiCard(emojiCode) {
  const emoji = String.fromCodePoint(emojiCode);
  const emojiCard = document.createElement("div");
  emojiCard.textContent = `${emoji} - ${emojiCode}`;
  return emojiCard;
}

// ADD the card to the gallery

function addEmojiCard(emojiCode) {
  const emojiCard = createEmojiCard(emojiCode);
  emojiCards.appendChild(emojiCard);
}

// CALL showEmojis() to display all emojis

showEmojis();
