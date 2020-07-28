/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let age, gender, town;
    age = prompt('How old are you?');
    gender = prompt('What is your gender?');
    town = prompt('Where do you live?');

    let txt;
    txt = '';
    txt += 'Confirm these answers:\n\n';
    txt += 'Age: ' + age + '\n';
    txt += 'Gender: ' + gender + '\n';
    txt += 'Town: ' + town + '\n';

    if(!confirm(txt)) {
        arguments.callee();
    }

})();
