window.onload = setUp;

function setUp() {
  document.getElementById("csstext").onkeydown=handleKeyPress;
  document.getElementById("htmltext").onkeydown=handleKeyPress;
  document.getElementById("roarktext").onkeydown=roarkTranslate;
  roarkTranslate();  
}

function handleKeyPress() {
  opener.document.getElementById("style").innerHTML = document.getElementById("csstext").value;
  opener.document.getElementById("body").innerHTML = document.getElementById("htmltext").value;
}

function roarkTranslate() {
  var myRoark = document.getElementById("roarktext").value;
  var myStrings = myRoark.split('\n');
  var myCSS = '';
  var blank = true;
  for ( i = 0; i < myStrings.length; i++ ) {
    phrase = myStrings[i];
    var myArray = phrase.split(' ');
    var x = myHash.getItem(myArray[0]);
    if ( blank && phrase != "") {
      myCSS += phrase + ' {\n';
      blank = false;
    } else if ( blank ) {
      myCSS += '\n';
    } else if ( myArray[0] == "" ) {
      myCSS += '}\n\n';
      blank = true;
    } else if ( x ) {
      myCSS += x + ':' + myArray[1] + ';\n';
    } else {
      myCSS += myArray[0] + ':' + myArray[1] + ';\n';
    }
  }
  if ( !blank ) {
    myCSS += '}';
  }
  document.getElementById("csstext").value = myCSS;
  handleKeyPress();
}
