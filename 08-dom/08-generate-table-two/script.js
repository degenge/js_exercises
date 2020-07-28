/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let targetElement = document.getElementById('target');

    let tableElement = document.createElement(('table'));
    let trElement, tdElement;

    for (let i = 1; i <= 10; i++) {
        trElement = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            tdElement = document.createElement('td');
            tdElement.textContent = i + '*' + j + '=' + parseInt(i * j);
            trElement.appendChild(tdElement);
        }
        tableElement.appendChild(trElement);
    }

    targetElement.appendChild(tableElement);

})();
