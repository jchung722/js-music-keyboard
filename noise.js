$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var note = document.getElementById($(this).html() + 'Audio');
    // if (note.paused) {
    note.play();
    // } else {
    note.currentTime = 0;
    // }
  });

  $("body").keypress(function(event) {
    var note = '';
    if (event.key == 'c') {
      note = document.getElementById('cAudio');
      $('.c').addClass('active');
    } else if (event.key == 'd'){
      note = document.getElementById('dAudio');
      $('.d').addClass('active');
    } else if (event.key == 'e'){
      note = document.getElementById('eAudio');
      $('.e').addClass('active');
    } else if (event.key == 'f'){
      note = document.getElementById('fAudio');
      $('.f').addClass('active');
    } else if (event.key == 'g'){
      note = document.getElementById('gAudio');
      $('.g').addClass('active');
    } else if (event.key == 'a'){
      note = document.getElementById('aAudio');
      $('.a').addClass('active');
    } else if (event.key == 'b'){
      note = document.getElementById('bAudio');
      $('.b').addClass('active');
    }
    // if (note.paused) {
    note.play();
    // } else {
    note.currentTime = 0;
    // }
  });

  $("body").keyup(function(event) {
    if (event.key == 'c') {
      $('.c').removeClass('active');
    } else if (event.key == 'd') {
      $('.d').removeClass('active');
    } else if (event.key == 'e') {
      $('.e').removeClass('active');
    } else if (event.key == 'f') {
      $('.f').removeClass('active');
    } else if (event.key == 'g') {
      $('.g').removeClass('active');
    } else if (event.key == 'a') {
      $('.a').removeClass('active');
    } else if (event.key == 'b') {
      $('.b').removeClass('active');
    }
  });



});
