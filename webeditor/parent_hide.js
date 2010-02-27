$(document).ready(function() {
    $('div#nav> div').hide();
    $('div#nav> h3').click(function() {
   $(this).next('div').slideToggle('fast')
   .siblings('div:visible').slideUp('fast');
    });
  });

