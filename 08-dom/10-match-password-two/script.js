/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let btn = document.getElementById('run');
    let password1 = document.getElementById('pass-one');
    let password2 = document.getElementById('pass-two');

    btn.addEventListener('click', function () {
        if (!(password1.value === password2.value)) {
            console.log('not the same');
            password1.setAttribute('class', 'error');
            password2.setAttribute('class', 'error');
        }
        else {
            console.log('same');
        }
    })
})();
