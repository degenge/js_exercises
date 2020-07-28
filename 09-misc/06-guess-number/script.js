/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let randomNumber = getRandomInteger(1, 100);
    console.log(randomNumber);
    let numberPrompt = prompt("Please enter a number between 1 and 100");

    let txt = '';
    if (numberPrompt == null || numberPrompt === "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + numberPrompt + "! How are you today?";
        numberPrompt = prompt("Please enter a number between 1 and 100");

    }

    if (!confirm(txt)) {
        arguments.callee();
    }





})();
