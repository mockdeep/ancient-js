window.onload = setUp;

function setUp() {
  document.getElementById("csstext").onkeydown=handleKeyPress;
  document.getElementById("htmltext").onkeydown=handleKeyPress;
  document.getElementById("roarktext").onkeydown=roarkTranslate;
}

function handleKeyPress(e) {
  var key=e.keyCode || e.which;
  opener.document.getElementById("style").innerHTML = document.getElementById("csstext").value;
  opener.document.getElementById("body").innerHTML = document.getElementById("htmltext").value;
  window.focus();
}

function roarkTranslate(e) {
  var myRoark = document.getElementById("roarktext").value;
  var myStrings = myRoark.split('\n');
  var myCSS = '';
  for ( i = 0; i < myStrings.length; i++ ) {
    phrase = myStrings[i];
    var myArray = phrase.split(' ');
    var x = myHash.getItem(myArray[0]);
    if ( x ) {
      myCSS += x + ':' + myArray[1] + ';\n';
    }
  }
  document.getElementById("csstext").value = myCSS;
  handleKeyPress(e);
}

