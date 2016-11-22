$(document).ready( function() {
  // tone is played when clicked!
  $('.instrument').on('click', 'button', function(event) {
    var note = document.getElementById($(this).html() + 'Audio');
    // if (note.paused) {
    note.play();
    // } else {
    note.currentTime = 0;
    // }
  });

  // Tone is played when corresponding key is pressed! Background colors are also activated;
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


  // Volume button: Should play tone C tone with adjusted volume when clicked/ when up/down arrow is pressed.
  // Also updates volume number.
  $('.volup').click(function(){
    $('#cAudio')[0].volume += 0.1;
    $('#dAudio')[0].volume += 0.1;
    $('#eAudio')[0].volume += 0.1;
    $('#fAudio')[0].volume += 0.1;
    $('#gAudio')[0].volume += 0.1;
    $('#aAudio')[0].volume += 0.1;
    $('#bAudio')[0].volume += 0.1;
    $('.vol').remove();
    $('.volume').prepend('<h1 class="vol">Volume: ' + Math.floor($('#cAudio')[0].volume*10) + '</h1>');
    var note = document.getElementById('cAudio');
    note.play();
    note.currentTime = 0;
  });

  $('.voldown').click(function(){
    $('#cAudio')[0].volume -= 0.1;
    $('#dAudio')[0].volume -= 0.1;
    $('#eAudio')[0].volume -= 0.1;
    $('#fAudio')[0].volume -= 0.1;
    $('#gAudio')[0].volume -= 0.1;
    $('#aAudio')[0].volume -= 0.1;
    $('#bAudio')[0].volume -= 0.1;
    $('.vol').remove();
    $('.volume').prepend('<h1 class="vol">Volume: ' + Math.floor($('#cAudio')[0].volume*10) + '</h1>');
    var note = document.getElementById('cAudio');
    note.play();
    note.currentTime = 0;
  });

  $("body").keydown(function(event) {
    var note = '';
    if (event.keyCode == 38){
      $('#cAudio')[0].volume += 0.1;
      $('#dAudio')[0].volume += 0.1;
      $('#eAudio')[0].volume += 0.1;
      $('#fAudio')[0].volume += 0.1;
      $('#gAudio')[0].volume += 0.1;
      $('#aAudio')[0].volume += 0.1;
      $('#bAudio')[0].volume += 0.1;
      $('.vol').remove();
      $('.volume').prepend('<h1 class="vol">Volume: ' + Math.floor($('#cAudio')[0].volume*10) + '</h1>');
      $('.volup').addClass('active');
      note = document.getElementById('cAudio');
      note.play();
      note.currentTime = 0;
    } else if (event.keyCode == 40){
      $('#cAudio')[0].volume -= 0.1;
      $('#dAudio')[0].volume -= 0.1;
      $('#eAudio')[0].volume -= 0.1;
      $('#fAudio')[0].volume -= 0.1;
      $('#gAudio')[0].volume -= 0.1;
      $('#aAudio')[0].volume -= 0.1;
      $('#bAudio')[0].volume -= 0.1;
      $('.vol').remove();
      $('.volume').prepend('<h1 class="vol">Volume: ' + Math.floor($('#cAudio')[0].volume*10) + '</h1>');
      $('.voldown').addClass('active');
      note = document.getElementById('cAudio');
      note.play();
      note.currentTime = 0;
    }
  });


// change background back to original color when keys are not pressed

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
    } else if (event.keyCode == 38) {
      $('.volup').removeClass('active');
    } else if (event.keyCode == 40) {
      $('.voldown').removeClass('active');
    }
  });



});
