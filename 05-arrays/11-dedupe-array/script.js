/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    let btn = document.getElementById('run');

    // let totalAges = people
    //     .map(function(b) { return b.age; })
    //     .reduce(function(p, c) { return p + c; });

    btn.addEventListener('click', function () {
        fruits.filter((item, index) => {
            console.log(item, index, fruits.indexOf(item), fruits.indexOf(item) === index);
            return fruits.indexOf(item) === index
        });
        console.log(fruits);
    });

})();
