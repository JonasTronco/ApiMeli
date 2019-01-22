$(document).ready(function() {
    //Este script muestra elementos dentro de los bloques como lo son la descripción o instrucciones de uso.
    //Llama el bloque del acordeón.
    $('.accordion-toggle').on('click', function(event) {
        event.preventDefault();
        // Crea las variables del acordeón
        var accordion = $(this);
        var accordionContent = accordion.next('.description-content');

        // Activa el acordeón realizando una apertura
        accordion.toggleClass("open");
        // toggle accordion content
        accordionContent.slideToggle(250);
        accordionContent.removeClass("description-content");
        accordionContent.addClass("description-content");
    });

    function popitup(url) {
        newwindow = window.open(url, 'name', 'height=200,width=600');
        if (window.focus) { newwindow.focus() }
        return false;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('apis_lib');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            d = document
            var f = d.createElement('a');
            f.onclick = window.open('api_app.html', '_blank', 'width=400,height=900', 'titlebar=no', 'status=no', 'location=no', 'left=100', );
            f.href = "#"
            d.body.appendChild(f);
        });
    }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('arbol_deriv');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            d = document
            var f = d.createElement('a');
            f.onclick = window.open('arbol.html', '_blank', 'width=300,height=500', 'titlebar=no', 'status=no', 'location=no', 'left=100', );
            f.href = "#"
            d.body.appendChild(f);
        });
    }, false);
}, false);