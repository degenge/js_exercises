/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const url = 'http://localhost:3000/heroes';
    const targetElement = document.getElementById('target');

    function getHero() {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let inputElement = document.getElementById('hero-id');
                let temp = data.find(x => x.id === parseInt(inputElement.value));
                let output = `
                    <div>
                        <li>
                        <h4>
                        <strong>${temp.name}</strong>
                        <em>${temp.alterEgo}</em>
                        </h4>
                        <p>${temp.abilities}</p>
                        </li>
                    </div> `;
                targetElement.innerHTML = output;
            });
    }

    document.getElementById("run").onclick = () => {
        getHero();
    }

})();
