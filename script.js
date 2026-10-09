// CREATE an array of at least 12 emoji codes
const emojiCodes = [
  127799, 127800, 127801, 127802, 127803, 127804, 127805, 127806, 127807,
  127808, 127809, 127810, 127811, 127812,
];

// FIND the gallery container
const gallery = document.getElementById("container");
// DEFINE showEmojis(count)
function showEmojis(count = emojiCodes.length) {
  //     DEFAULT count to the array's length
  //     CLEAR the existing gallery
  gallery.innerHTML = "";

  //     REPEAT count times, starting at array index zero
  for (let i = 0; i < emojiCodes.length && i < count; i++) {
    const code = emojiCodes[i];

    let count = 0;

    const card = document.createElement("div");
    card.classList.add("card");

    const emoji = document.createElement("span");
    emoji.textContent = String.fromCodePoint(code);

    const codeText = document.createElement("p");
    codeText.textContent = `Code: ${code}`;

    card.appendChild(emoji);
    card.appendChild(codeText);
    gallery.appendChild(card);
    card.tabIndex = 0; // Make the card focusable
  }
}
// CALL showEmojis() to display all emojis
showEmojis();
