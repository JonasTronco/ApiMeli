
$(function() 
{
  console.log( "Ha ocurrido document.ready: documento listo" )
  var checkPageButton = document.getElementById('melilookup')
  checkPageButton.addEventListener('click', function() {
  window.open('intro.html','_blank','width=400,height=1200','titlebar=no','status=no','location=no','left=100')
  })
});