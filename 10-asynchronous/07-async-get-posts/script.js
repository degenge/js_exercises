/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function getArticles() {
        const articles = await window.lib.getPosts();
        console.log(articles);
    }

    document.getElementById("run").onclick = () => {
        getArticles();
    };

})();
