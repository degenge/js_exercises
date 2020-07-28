/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let outputElement = document.getElementById('target');
    let partoneElement = document.getElementById('part-one');
    let parttwoElement = document.getElementById('part-two');
    let partthreeElement = document.getElementById('part-three');
    let partfourElement = document.getElementById('part-four');

    let txt = '';

    function makePhonenumber() {
        txt = '0' + partoneElement.value + parttwoElement.value + partthreeElement.value + partfourElement.value;
        outputElement.textContent = txt;
    }

    let partoneMinValue = partoneElement.getAttribute('data-min');
    let partoneMaxValue = partoneElement.getAttribute('data-max');
    partoneElement.value = partoneMinValue;
    partoneElement.addEventListener('click', function () {
        if (partoneElement.value < partoneMaxValue) {
            let numberCount = parseInt(partoneElement.value) + 1;
            partoneElement.value = numberCount;
            partoneElement.textContent = numberCount;
            makePhonenumber();
        }
    });

    let parttwoMinValue = parttwoElement.getAttribute('data-min');
    let parttwoMaxValue = parttwoElement.getAttribute('data-max');
    parttwoElement.value = parttwoMinValue;
    parttwoElement.addEventListener('click', function () {
        if (parttwoElement.value < parttwoMaxValue) {
            let numberCount = parseInt(parttwoElement.value) + 1;
            parttwoElement.value = ("0" + numberCount).slice(-2);
            parttwoElement.textContent = ("0" + numberCount).slice(-2);
            makePhonenumber();
        }
    });

    let partthreeMinValue = partthreeElement.getAttribute('data-min');
    let partthreeMaxValue = partthreeElement.getAttribute('data-max');
    partthreeElement.value = partthreeMinValue;
    partthreeElement.addEventListener('click', function () {
        if (partthreeElement.value < partthreeMaxValue) {
            let numberCount = parseInt(partthreeElement.value) + 1;
            partthreeElement.value = ("0" + numberCount).slice(-2);
            partthreeElement.textContent = ("0" + numberCount).slice(-2);
            makePhonenumber();
        }
    });

    let partfourMinValue = partfourElement.getAttribute('data-min');
    let partfourMaxValue = partfourElement.getAttribute('data-max');
    partfourElement.value = partfourMinValue;
    partfourElement.addEventListener('click', function () {
        if (partfourElement.value < partfourMaxValue) {
            let numberCount = parseInt(partfourElement.value) + 1;
            partfourElement.value = ("0" + numberCount).slice(-2);
            partfourElement.textContent = ("0" + numberCount).slice(-2);
            makePhonenumber();
        }
    });

})
();
