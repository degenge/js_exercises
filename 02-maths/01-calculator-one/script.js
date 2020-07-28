/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let number_1 = document.getElementById('op-one');
    let number_2 = document.getElementById('op-two');

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(parseInt(number_1.value) + parseInt(number_2.value));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(parseInt(number_1.value) - parseInt(number_2.value));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(parseInt(number_1.value) * parseInt(number_2.value));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(parseInt(number_1.value) / parseInt(number_2.value));
    });
})();
