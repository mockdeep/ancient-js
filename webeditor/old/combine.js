window.onload = setUp;

function setUp() {
  document.getElementById("csstext").onkeydown=handleKeyPress;
  document.getElementById("htmltext").onkeydown=handleKeyPress;
}

function handleKeyPress(e) {
  var key=e.keyCode || e.which;
  if (key==13) {
    var header1 = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head><style type="text/css">';
    var header2 = '</style></head><body>';
    document.getElementById("result").innerHTML = 
      header1 + document.getElementById("csstext").value + 
      header2 + document.getElementById("htmltext").value + '</body></html>';
  }
}
