$(function() {
  if (location.pathname.endsWith('/')) {
    location.pathname = location.pathname + 'index.html';
    return;
  }

  var event = document.getElementById('select_lang');
  console.log(event);
  event.onchange = function() { // セレクトボックスに変更が加えられたら
    var index = document.select_form.select_lang.selectedIndex;
    var val = document.select_form.select_lang.options[index].value;
    console.log(val);

    if(index != 0) {
      changeLanguage(val);
      console.log("OK");
    }
  }

  $('#modal-content li a').click(function() {
    var lang = $(this).data('lang');
    changeLanguage(lang);
  });

  var lang = Cookies.get('lang');
  if (lang) {
    changeLanguage(lang);
    return;
  }

  var modalHtml = ' \
<a class="fancybox" href="#modal-content"></a> \
<div id="modal-content" style="display:none; width: 60%"> \
言語を選択してください。 Please select your language. \
<ul> \
<li><a href="#" data-lang="en">English</a></li> \
<li><a href="#" data-lang="ja">日本語</a></li> \
</ul> \
</div> \
';

  $(document.body).append(modalHtml);

  $('.fancybox').fancybox({}).click();

  function changeLanguage(lang) {
    Cookies.set('lang', lang);

    var path = location.pathname;
    path = path.replace(/-[^\/\-]*\.html$/, '');
    path = path.replace(/\.html$/, '');
    path = path + '-' + lang + '.html';
    if (path != location.pathname) {
      location.pathname = path;
    }
  }
});