$(function() {
  if (location.pathname.endsWith('/')) {
    location.pathname = location.pathname + 'index.html';
    return;
  }

  var modalHtml = ' \
<a class="fancybox" href="#modal-content"></a> \
<div id="modal-content" style="display:none; width: 80%"> \
Please select your language. \
<ul> \
<li><a href="#" data-lang="en">English</a></li> \
<li><a href="#" data-lang="ja">日本語</a></li> \
</ul> \
</div> \
';
  $(document.body).append(modalHtml);

  $('.fancybox').fancybox({}).click();

  $('#modal-content li a').click(function() {
    var lang = $(this).data('lang');

    var path = location.pathname;
    path = path.replace(/\.html$/, '-' + lang + '.html');
    location.pathname = path;
  });
});