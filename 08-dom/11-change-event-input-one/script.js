/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let passwordElement = document.getElementById('pass-one');
    let counterElement = document.getElementById('counter');

    passwordElement.addEventListener('input', function () {
        console.log(passwordElement.value);
        console.log(passwordElement.value.length);
        counterElement.textContent = passwordElement.value.length + '/10';
        if (passwordElement.value.length === 10) {
            passwordElement.disabled = true;
        }
    })

})();
