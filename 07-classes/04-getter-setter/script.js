/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {

        constructor(firstName, lastName) {
            this._firstname = firstName;
            this._lastname = lastName;
        }

        get name() {
            return this._firstname + ' ' + this._lastname;
        }
        set name(x) {
            let temp = x.split(' ');
            this._firstname = temp[0];
            this._lastname = temp[1];
        }
    }

    let btn = document.getElementById('run');

    btn.addEventListener('click', function () {

        let newPerson = new Person('Gerrit', 'Degenhardt');
        console.log(newPerson.name);
        newPerson.name = 'Carinne Verhofstadt';
        console.log(newPerson.name);

    });
})();
