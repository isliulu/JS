/**
 * created by Administrator on 2019-6-17
 */
var name = 'World!';
(function () {
    console.log(typeof name);
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();