window.onload = setUp;

function setUp() {
  document.getElementById("button").onclick=openChild;
}

function openChild() {
//  alert("Hi");
  evilChild = window.open("child.htm", "evilChild", "height=500,width=350,resize=0");
  evilChild.focus();
}

