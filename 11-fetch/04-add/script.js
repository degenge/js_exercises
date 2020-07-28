/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const url = 'http://localhost:3000/heroes';

    let nameElement = document.getElementById('hero-name');
    let alteregoElement = document.getElementById('hero-alter-ego');
    let powersElement = document.getElementById('hero-powers');

    function addHero(){

        const hero = {
            name: nameElement.value,
            alterEgo: alteregoElement.value,
            abilities: powersElement.value.split(",")
        };
        console.log(hero);

        const options = {
            method: 'POST',
            body: JSON.stringify(hero),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res));
    }

    document.getElementById("run").onclick = () => {
        addHero();
    }

})();
