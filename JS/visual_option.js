$(document).ready(function() {
   document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('melilookup');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            d = document
            var f = d.createElement('a');
            f.onclick = window.open('api_ml.html', '_blank', 'width=400,height=900', 'titlebar=no', 'status=no', 'location=no', 'left=100', );
            f.href = "#"
            d.body.appendChild(f);
        });
    }, 
   },
}