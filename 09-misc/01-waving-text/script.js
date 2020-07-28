/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let paragraphElement = document.getElementById('target');
    //let paragraphText = paragraphElement.innerText;
    let paragraphText = "Dexter, altus historias superbe anhelare de fortis, noster cursus Ubi est emeritis victrix";
    let spanElement = '';

    //ES6
    [...paragraphText].forEach(c => console.log(c));

    // for (let i = 0; i < paragraphText.length; i++) {
    //     spanElement += paragraphText.charAt(i).fontsize(i);
    //     for (let j = 1; j <= 7; j++) {
    //
    //         //spanElement += '<span style="font-size: ' + j + 'px;">';
    //         //spanElement += paragraphText[i].fontsize(j);
    //         //spanElement += '</span>';
    //
    //     }
    // }

    paragraphElement.innerHTML = spanElement;

})();
