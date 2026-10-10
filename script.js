// CREATE an array of at least 12 emoji codes
const emojiCodes = [
  127799, 127800, 127801, 127802, 127803, 127804, 127805, 127806, 127807,
  127808, 127809, 127810, 127811, 127812,
];

// FIND the gallery container
const gallery = document.getElementById("container");
const emojiCards = document.getElementById("emoji-cards");

// DEFINE showEmojis(count)
function showEmojis(count = emojiCodes.length) {
  //     DEFAULT count to the array's length
  //     CLEAR the existing gallery
  gallery.innerHTML = "";

  //     REPEAT count times, starting at array index zero
  for (let i = 0; i < emojiCodes.length && i < count; i++) {
    const code = emojiCodes[i];

    let count = 0;

    const emojiCard = document.createElement("div");
    emojiCard.classList.add("card");

    const emoji = document.createElement("span");
    emoji.textContent = String.fromCodePoint(code);

    const codeText = document.createElement("p");
    codeText.textContent = `Code: ${code}`;

    emojiCard.appendChild(emoji);
    emojiCard.appendChild(codeText);
    gallery.appendChild(emojiCard);

    const countText = document.createElement("p");
    emojiCard.appendChild(countText);

    const cardData = {
      text: emoji.textContent,
      code: code,
      count: count,
    };
    emojiCard.tabIndex = 0; // Make the card focusable

    console.log(
      `Emoji: ${cardData.text}, Code: ${cardData.code}, Count: ${cardData.count}`,
    );
  }
}
// CALL showEmojis() to display all emojis
showEmojis();
