$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var note = document.getElementById($(this).html() + 'Audio');
    // if (note.paused) {
    note.play();
    // } else {
    note.currentTime = 0;
    // }
  });


});
