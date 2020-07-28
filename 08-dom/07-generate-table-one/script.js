/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let targetElement = document.getElementById('target');

    let tableElement = document.createElement(('table'));
    let trElement, tdElement;

    for (let i = 0; i < 10; i++) {
        trElement = document.createElement('tr');
        tdElement = document.createElement('td');
        tdElement.textContent = 'row ' + parseInt(i + 1);
        trElement.appendChild(tdElement);
        tableElement.appendChild(trElement);
    }

    targetElement.appendChild(tableElement);

})();
