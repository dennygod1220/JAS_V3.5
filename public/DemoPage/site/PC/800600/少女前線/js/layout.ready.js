$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-to-top').tooltip('show');

});

/**
 * 吐司訊息
 * @param string message
 * @param int showTime
 */
function toast(message, showTime) {
    // Get the snackbar DIV
    var snackbar = $('#snackbar');

    if (snackbar.length==0) {
      $('footer').after('<div id="snackbar">' + message + '</div>');
      snackbar = $('#snackbar');
    } else {
      snackbar.html(message);
    }

    snackbar.addClass('show');
    showTime = showTime || 3000;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){
      snackbar.removeClass('show');
      snackbar.remove();
    }, showTime);
}