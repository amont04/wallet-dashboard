$(document).ready(function() {
    $('#addAccount').mouseenter(function() {
      $('#addAccount').fadeTo('fast', 1);
    });
    $('#addAccount').mouseleave(function() {
      $('#addAccount').fadeTo('fast', 0.5);
    });
  });
  
  $(document).ready(function() {
    $('#addAccount').click(function() {
      var newNumber = parseInt(prompt("What is your account number?"));
       alert('Thank you! We will add your account after verification.')
    });
  });