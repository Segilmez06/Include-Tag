window.addEventListener('DOMContentLoaded', (event) => {
    var elements = document.getElementsByTagName('include');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var src = element.getAttribute('src');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', src, false);
        xhr.send();
        element.outerHTML = xhr.responseText;
    }
});
