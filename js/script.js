setInterval(function(){ 
  $("#popup-wrap").stop().slideToggle('slow'); 
}, 4000);

function hide(target) {
  document.getElementById(target).style.display = 'none';
}