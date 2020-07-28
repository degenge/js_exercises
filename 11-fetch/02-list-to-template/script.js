/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").onclick = () => {

        let targetElement = document.getElementById('target');

        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {

                console.log(data);

                let output = "<h2>Heroes</h2>";
                data.forEach(function (hero) {
                    output += `
                    <div>
                        <li>
                        <h4>
                        <strong>${hero.name}</strong>
                        <em>${hero.alterEgo}</em>
                        </h4>
                        <p>${hero.abilities}</p>
                        </li>
                    </div> `;
                });
                targetElement.innerHTML = output;

                // let templateElement = document.getElementById('tpl-hero');
                // let cloneElement = templateElement.content.cloneNode(true);
                // let itemElement = cloneElement.querySelectorAll("li");
                // for (let i = 0; i < data.length; i++) {
                //     let nameElement = itemElement.querySelector('em');
                //     console.log(data[i].name);
                //     itemElement.innerHTML = data[i].name;
                //     let alteregoElement = document.getElementsByClassName('alter-ego')[0];
                //     alteregoElement.innerHTML = '';
                //     let powersElement = document.getElementsByClassName('powers')[0];
                //     powersElement.innerHTML = '';
                //     targetElement.appendChild(itemElement);
                // }

            });

    };
})();
