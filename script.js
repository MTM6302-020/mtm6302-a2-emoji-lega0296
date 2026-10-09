// CREATE an array of at least 12 emoji codes

const emojiCodes = [
  128512, 128513, 128514, 128515, 128516, 128517, 128518, 128519, 128520,
  128521, 128522, 128523, 128151,
];

// FIND the gallery container
const container = document.getElementById("container");
const emojiCards = document.getElementById("emoji-cards");

// DEFINE showEmojis(count)

// DEFAULT count to the array's length

function showEmojis(count = emojiCodes.length) {
  emojiCards.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const emoji = String.fromCodePoint(emojiCodes[i]);
    const emojiCard = document.createElement("div");
    emojiCard.textContent = emoji;
    emojiCards.appendChild(emojiCard);
  }
}

// CLEAR the existing gallery

const clearGallery = () => {
  emojiCards.innerHTML = "";
};

//  REPEAT count times, starting at array index zero
emojiCards.tabIndex = 0;

// READ the emoji code at the current index

// CREATE a card containing the emoji and its code

// ADD the card to the gallery

// CALL showEmojis() to display all emojis

showEmojis();
