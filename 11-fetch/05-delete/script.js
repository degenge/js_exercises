/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const url = 'http://localhost:3000/heroes';

    function deleteHero(){
        let inputElement = document.getElementById('hero-id');

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(url + '/' + parseInt(inputElement.value), options)
            .then(res => {
                if (res.ok) {
                    return Promise.resolve('Hero deleted.');
                } else {
                    return Promise.reject('An error occurred.');
                }
            })
            .then(res => console.log(res));
    }

    document.getElementById("run").onclick = () => {
        deleteHero();
    }


})();
