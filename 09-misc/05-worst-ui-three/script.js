/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
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

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let partoneMinValue = partoneElement.getAttribute('data-min');
    let partoneMaxValue = partoneElement.getAttribute('data-max');
    document.getElementById('fix-part-one').addEventListener('click', function () {
        let numberCount = getRandomInteger(parseInt(partoneMinValue), parseInt(partoneMaxValue));
        partoneElement.value = numberCount;
        partoneElement.textContent = numberCount;
        makePhonenumber();
    });

    let parttwoMinValue = parttwoElement.getAttribute('data-min');
    let parttwoMaxValue = parttwoElement.getAttribute('data-max');
    document.getElementById('fix-part-two').addEventListener('click', function () {
        let numberCount = getRandomInteger(parseInt(parttwoMinValue), parseInt(parttwoMaxValue));
        parttwoElement.value = ("0" + numberCount).slice(-2);;
        parttwoElement.textContent = ("0" + numberCount).slice(-2);;
        makePhonenumber();
    });

    let partthreeMinValue = partthreeElement.getAttribute('data-min');
    let partthreeMaxValue = partthreeElement.getAttribute('data-max');
    document.getElementById('fix-part-three').addEventListener('click', function () {
        let numberCount = getRandomInteger(parseInt(partthreeMinValue), parseInt(partthreeMaxValue));
        partthreeElement.value = ("0" + numberCount).slice(-2);;
        partthreeElement.textContent = ("0" + numberCount).slice(-2);;
        makePhonenumber();
    });

    let partfourMinValue = partfourElement.getAttribute('data-min');
    let partfourMaxValue = partfourElement.getAttribute('data-max');
    document.getElementById('fix-part-four').addEventListener('click', function () {
        let numberCount = getRandomInteger(parseInt(partfourMinValue), parseInt(partfourMaxValue));
        partfourElement.value = ("0" + numberCount).slice(-2);;
        partfourElement.textContent = ("0" + numberCount).slice(-2);;
        makePhonenumber();
    });

})();
