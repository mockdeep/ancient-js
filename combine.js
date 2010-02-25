window.onload = setUp;

function setUp() {
  document.getElementById("csstext").onkeydown=handleKeyPress;
  document.getElementById("htmltext").onkeydown=handleKeyPress;
}

function handleKeyPress(e) {
  var key=e.keyCode || e.which;
  if (key==13) {
    opener.document.getElementById("style").innerHTML = document.getElementById("csstext").value;
    opener.document.getElementById("body").innerHTML = document.getElementById("htmltext").value;
    window.focus();
  }
}
