/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let btn = document.getElementById('run');
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let ageYear, ageMonth, ageDay;
    let txt = '';


    // let DOB = "September 26, 1976";
    // let millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
    // let millisecondsBetweenNowAnd1970 = Date.now();
    // let ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;
    //
    // let milliseconds = ageInMilliseconds;
    // let second = 1000;
    // let minute = second * 60;
    // let hour = minute * 60;
    // let day = hour * 24;
    // let month = day * 30;
    // let year = day * 365;
    //
    //
    // let years = Math.round(milliseconds / year);
    // let months = years * 12;
    // let days = years * 365;
    // let hours = Math.round(milliseconds / hour);
    // let seconds = Math.round(milliseconds / second);
    //
    // txt = "Age in years : " + years + "\nAge in months : " + months + "\nAge in days : " + days; // + "\nAge in hours : " + hours + "\nAge in minutes : " + minutes + "\nAge in seconds : " + seconds;

    btn.addEventListener('click', function () {
        // YEARS
        ageYear = currentYear - dobYear.value ;
        console.log(ageYear);

        //MONTHS
        if (currentMonth >= dobMonth.value)
            ageMonth = currentMonth - dobMonth.value;
        else {
            ageYear--;
            ageMonth = 12 + currentMonth - dobMonth.value;
        }

        //DAYS
        if (currentDay >= dobDay.value)
            ageDay = currentDay - dobDay.value;
        else {
            ageMonth--;
            ageDay = 31 + currentDay - dobDay.value;

            if (ageMonth < 0) {
                ageMonth = 11;
                ageYear--;
            }
        }
        txt = ageYear + ' year(s) - '  + ageMonth + ' month(s) - ' + ageDay + ' day(s)';
        alert(txt);

    })

})();
