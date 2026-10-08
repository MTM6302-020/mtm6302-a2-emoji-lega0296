# mtm6302-a2-emoji-

Create an emoji gallery while following the instructions provided on Brightspace and Github

<!-- copy and paste from Brightspace -->

Objective
Create a responsive emoji gallery using JavaScript. Store emoji codes in an array, use a loop to build the gallery, and write one function that controls how many emojis appear.

Getting started
Create a new public GitHub repository named:

mtm6302-a2-emoji-YOUR-AC-USERNAME
Replace YOUR-AC-USERNAME with your actual Algonquin College username.

Clone the repository to your computer and open it in Visual Studio Code.

Create these files at the root of your repository:

index.html
style.css
script.js
Link your CSS and JavaScript files in index.html. Use the defer attribute when linking your JavaScript. Read more about defer.

Build and test your emoji gallery locally. Commit and push your work to GitHub regularly.

Set up GitHub Pages for your repository, publishing the site from the main branch and the root folder. Your index.html file must be at the root of that branch.

Requirements

1. Create your emoji array
   Create an array containing at least 12 different decimal Unicode emoji codes.

For example:

const emojiCodes = [128512, 128514, 128525, 129409]
Expand this example with your own choices. Use emojis represented by a single code point for this assignment.

2. Build the gallery with JavaScript
   Each card must display:

The emoji character, generated from its code.
Its decimal code.
Keep an empty gallery container in your HTML. Create the individual cards using JavaScript and a loop.

Do not manually write the cards in HTML or repeat the same JavaScript once per emoji.

3. Create one function
   Create a function named showEmojis() with a count parameter. Give the parameter a default value equal to the number of items in your array:

function showEmojis(count = emojiCodes.length) {
// Build the gallery here.
}
The function must:

Clear the existing gallery.
Use a for loop to access the first count items in the array.
Create and display a card for each of those emojis.
Display emojis in the same order as the array. Repeated calls must replace the previous gallery without creating duplicates.

4. Display all emojis when the page loads
   Call the function without an argument at the end of your script:

showEmojis()
This displays all emojis on initial page load and after a refresh.

Users can change the number displayed through the browser console:

showEmojis(4) // Display the first four emojis.
showEmojis(8) // Display the first eight emojis.
showEmojis() // Display all emojis.
showEmojis(0) // Clear the gallery.
For this assignment, assume users supply a whole number between zero and the number of emojis in the array. Input validation and conditional statements are not required.

5. Present the gallery clearly
   Use CSS Grid or Flexbox for a responsive layout.
   Keep emoji characters and decimal codes readable.
   Use const and let, not var.
   Keep HTML, CSS, and JavaScript in separate files.
   Do not use CSS frameworks or JavaScript libraries.
   Objects, filters, buttons, event listeners, animations, and saved preferences are not required.

Plan before coding
CREATE an array of at least 12 emoji codes

FIND the gallery container

DEFINE showEmojis(count)
DEFAULT count to the array's length

    CLEAR the existing gallery

    REPEAT count times, starting at array index zero
        READ the emoji code at the current index
        CREATE a card containing the emoji and its code
        ADD the card to the gallery

CALL showEmojis() to display all emojis
A for loop still needs a continuation test, such as index < count. You do not need a separate if, else, or switch statement.

Test your work
Test Expected result
Open the page All emojis appear.
Call showEmojis(4) Only the first four emojis appear.
Call showEmojis(8) The gallery is replaced with the first eight emojis.
Call showEmojis(8) again Exactly eight emojis remain, without duplicates.
Call showEmojis(0) The gallery is empty.
Call showEmojis() All emojis return.
Refresh after displaying fewer emojis All emojis appear again.
Also check that the layout works at narrow and wide browser widths and that each card shows the correct decimal code.

Submission
Commit and push your completed work to GitHub.
Open your published GitHub Pages site and confirm that:
The page loads and its styling appears correctly.
All emojis display on page load and refresh.
showEmojis(count) works from the browser console.
Submit the link to your working GitHub Pages site in Brightspace.
Submit the published website URL, not the GitHub repository URL. Keep your repository public and your site available for grading.
