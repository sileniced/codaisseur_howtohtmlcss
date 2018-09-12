const css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');
css.setAttribute('href', '/howtohtmlcss/css/bars.css');

document.getElementsByTagName("head")[0].appendChild(css);

document.write('<ul class="top-bar">\n' +
  '    <li><a href="/howtohtmlcss/index.html">Mimi\'s teachables</a></li>\n' +
  '    <li><a href="/howtohtmlcss/content/html/1.html">HTML</a></li>\n' +
  '    <li><a href="/howtohtmlcss/content/css/1.html">CSS</a></li>\n' +
  '    <li><a href="/howtohtmlcss/content/clean_code/1.html">CLEAN CODE</a></li>\n' +
  '</ul>\n');

const href = window.location.href.split('/'),
      loc = href[href.length - 2];

if (loc !== 'howtohtmlcss') {
  switch(loc) {
    case 'html':
      document.write('<ul class="side-bar">\n' +
        '    <li><h1>HTML</h1></li>\n' +
        '    <li><a href="/howtohtmlcss/content/html/1.html">What to use it for</a></li>\n' +
        '    <li><a href="/howtohtmlcss/content/html/2.html">Tags & Attributes</a></li>\n' +
        '</ul>');
      break;
    case 'css':
      document.write('<ul class="side-bar">\n' +
        '    <li><h1>CSS</h1></li>\n' +
        '    <li><a href="/howtohtmlcss/content/css/1.html">What to use it for</a></li>\n' +
        '    <li><a href="/howtohtmlcss/content/css/2.html">Rules, Declarations and Properties</a></li>\n' +
        '    <li><a href="/howtohtmlcss/content/css/3.html">Cascading</a></li>\n' +
        '    <li><a href="/howtohtmlcss/content/css/4.html">Box Model, margins, borders and paddings</a></li>\n' +
        '    <li><a href="/howtohtmlcss/content/css/5.html">FlexBox</a></li>\n' +
        '</ul>');
      break;
    case 'clean_code':
      document.write('<ul class="side-bar">\n' +
        '    <li><h1>CLEAN CODE</h1></li>\n' +
        '    <li><a href="/howtohtmlcss/content/clean_code/1.html">Refactoring</a></li>\n' +
        '    <li><a href="/howtohtmlcss/content/clean_code/2.html">DRY, KISS and Separation of concerns</a></li>\n' +
        '</ul>');
  }

}