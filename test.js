$(function() { 

  var event = document.getElementById('test_lang');
  event.onchange = function() { // セレクトボックスに変更が加えられたら
    var index = document.test_form.test_lang.selectedIndex;
    var val = document.test_form.test_lang.options[index].value;

    if(index != 0) {
      changeLanguage(val);
    }
  }
  
});

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