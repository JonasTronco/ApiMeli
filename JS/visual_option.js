
$(function() 
{
  console.log( "Ha ocurrido document.ready: documento listo" )
  var checkPageButton = document.getElementById('melilookup')
  checkPageButton.addEventListener('click', function() {
  window.open('api_mp.html','_blank','width=300,height=500','titlebar=no','status=no','location=no','left=100')
  })
});