$(document).ready(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var checkPageButton = document.getElementById('melilookup');
        checkPageButton.addEventListener('click', function() {
          chrome.tabs.getSelected(null, function(tab) {
            d = document
            var f = d.createElement ('a');
            f.onclick = window.open('api_mp.html','_blank','width=300,height=500','titlebar=no','status=no','location=no','left=100');
            f.href = "#"
            d.body.appendChild(f);
          });
        }, false);
       }, false);
    })