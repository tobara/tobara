if ( $.cookie('styleCookie') === 'style-light.css') {
  $('html, body').css('background', '#eeeeee');
} else if ($.cookie('styleCookie') === 'style.css') {
  $('html, body').css('background', '#222222');
}
