/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function getArticles() {
        return await window.lib.getPosts();
    }

    async function getComments(articles) {
        const comments = await window.lib.getComments(articles.id);
        console.log(comments);
    }

    document.getElementById("run").onclick = () => {
        let articles = getArticles();
        getComments(articles);

    };

})();
