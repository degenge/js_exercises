/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let number_1 = document.getElementById('op-one');
    let number_2 = document.getElementById('op-two');

    const performOperation = operation => {
        // perform the operation
        let total = 0;
        switch (operation) {
            case 'addition':
                total = parseInt(number_1.value) + parseInt(number_2.value);
                break;
            case 'substraction':
                total = parseInt(number_1.value) - parseInt(number_2.value);
                break;
            case 'multiplication':
                total = parseInt(number_1.value) * parseInt(number_2.value);
                break;
            case 'division':
                total = parseInt(number_1.value) / parseInt(number_2.value);
                total = Math.round((total + Number.EPSILON) * 100) / 100;
                break;
            default:
            // code block
        }
        alert(total);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();
