/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let btn = document.getElementById('run');

    //METHOD 1
    function randomDataSet1(dataSetSize, minValue, maxValue) {
        return new Array(dataSetSize).fill(0).map(
            function () {
                return Math.floor(Math.random() * (maxValue - minValue) + minValue);
            }
        );
    }

    //METHOD 2
    function randomDataSet2(dataSetSize, minValue, maxValue) {
        let arrayNumbers = [];
        while (arrayNumbers.length < dataSetSize) {
            let r = Math.floor(Math.random() * maxValue) + minValue;
            if (arrayNumbers.indexOf(r) === -1) arrayNumbers.push(r);
        }
        return arrayNumbers
    }

    function loopArray(item, index) {
        document.getElementById('n-' + parseInt(index + 1)).innerHTML = item;
    }

    btn.addEventListener('click', function () {
        //console.log(randomDataSet1(10, 1, 100));
        let arrayNumbers = randomDataSet2(10, 1, 100);
        arrayNumbers.forEach(loopArray);
        //That is because Math.min or Math.max functions expect distinct variables and not an array.
        //So in order to do that before ES6/ES2015 apply method was used
        document.getElementById('min').innerHTML = Math.min.apply(Math, arrayNumbers);
        document.getElementById('max').innerHTML = Math.max.apply(Math, arrayNumbers);
        document.getElementById('sum').innerHTML = arrayNumbers.reduce((a, b) => a + b, 0);
        document.getElementById('average').innerHTML = arrayNumbers.reduce((a, b) => a + b, 0) / arrayNumbers.length;
    });

})();
