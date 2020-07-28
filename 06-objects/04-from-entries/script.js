/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    // your code here
    let btn = document.getElementById('run');

    btn.addEventListener('click', function () {
        let result = {};
        keys.forEach((key, i) => result[key] = values[i]);
        console.log(result);

        let arr = {};
        //Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
        Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ));
        console.log(arr);
    });

})();
