/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let passwordElement = document.getElementById('pass-one');
    let validityElement = document.getElementById('validity');
    let pattern = "^(?=.*?\\d.*\\d)[a-zA-Z0-9]{8,}$";

    passwordElement.addEventListener('input', function () {
        console.log(passwordElement.value);
        console.log(passwordElement.value.length);
        if (passwordElement.value.match(pattern) ) {
            validityElement.textContent = 'OK';
        }
    })

})();
