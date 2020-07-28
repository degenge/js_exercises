/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    let btn = document.getElementById('run');

    btn.addEventListener('click', function () {
        console.log(fruits);
        console.log(fruits.delete('apple'));
        console.log(fruits.delete('cherry'));
        console.log(fruits.add('banana'));
        console.log(fruits.add('kiwi'));
    });

})();
