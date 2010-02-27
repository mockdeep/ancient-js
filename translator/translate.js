window.onload = setUp;

function setUp() {
  document.getElementById("input").onkeydown=handleKeyPress;
}

function handleKeyPress(e) {
  var key=e.keyCode || e.which;
  if (key==13) {
    var myRoark = document.getElementById("input").value;
    var myStrings = myRoark.split('\n');
    var myCSS = '';
    for ( i = 0; i < myStrings.length; i++ ) {
      phrase = myStrings[i];
      var myArray = phrase.split(' ');
      var x = myHash.getItem(myArray[0]);
      if ( x ) {
        myCSS += '<br>' + x + ':' + myArray[1] + ';';
      }
      document.getElementById("output").innerHTML = myCSS;
    }
  }
}

