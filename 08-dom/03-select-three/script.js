/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let elements = document.getElementsByClassName('target');
    // let arr = Array.prototype.slice.call(elements);
    // console.log(typeof arr);
    for (let i = 0; i <= elements.length; i++) {
        console.log(elements[i].textContent);
        elements[i].textContent = 'owned';
    }

})();
