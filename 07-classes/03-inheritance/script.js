/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {

        constructor(name) {
            this.name = name;
        }

        static greeting() {
            return 'Hello!';
        }

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Dog extends Animal {

        constructor(name) {
            super(name, Dog.greeting());
        }
    }

    class Cat extends Animal {

        constructor(name) {
            super(name, Cat.greeting());
        }

    }

    let btn = document.getElementById('run');

    btn.addEventListener('click', function () {

        let newDog = new Dog('Doggie');
        console.log(newDog.sayHello());

        let newCat = new Cat('Cattie');
        console.log(newCat.sayHello());
    });


})();
