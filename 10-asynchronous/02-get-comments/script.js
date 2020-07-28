/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function myCallbackFunction(error, articles) {
        window.lib.getComments(articles.id, myCallbackFunction2);
    }

    function myCallbackFunction2(error, comments) {
        console.log(comments);
    }

    document.getElementById("run").onclick = () => {
        window.lib.getPosts(myCallbackFunction);
    };

})();
