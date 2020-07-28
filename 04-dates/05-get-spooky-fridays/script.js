/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let year = document.getElementById('year');
    let btn = document.getElementById('run');

    let month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let today;

    btn.addEventListener('click', function () {
        let selectedYear = parseInt(year.value);
        let txt = '';

        for (let i = 0; i < 12; i++) {
            today = new Date(selectedYear, i, 13);
            if (today.getDay() === 5) {
                txt += month[today.getMonth()] + ' has a friday the 13th\n';
            }
        }
        alert(txt);
    });


})();
