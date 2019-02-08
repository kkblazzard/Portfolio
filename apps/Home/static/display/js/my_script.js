function displaybio() {
  var x = document.getElementById("bio");
  var m = document.getElementById("mean");
  var c = document.getElementById("c");
  var p = document.getElementById("python");
  if (x.style.display === "none") {
    x.style.display = "block";
    c.style.display = "none";
    m.style.display = "none";
    p.style.display = "none";
  } else {
    x.style.display = "none";
    p.style.display = "block";
  }
}
function python() {
  var m = document.getElementById("mean");
  var c = document.getElementById("c");
  var p = document.getElementById("python");
  var x = document.getElementById("bio");

  p.style.display = "block";
  m.style.display = "none";
  c.style.display = "none";
  x.style.display="none";


}
function c() {
  var m = document.getElementById("mean");
  var c = document.getElementById("c");
  var p = document.getElementById("python");
  var x = document.getElementById("bio");

  c.style.display = "block";
  m.style.display = "none";
  p.style.display = "none";
  x.style.display="none";
}
function mean() {
  var m = document.getElementById("mean");
  var c = document.getElementById("c");
  var p = document.getElementById("python");
  var x = document.getElementById("bio");

  m.style.display = "block";
  c.style.display = "none";
  p.style.display = "none";
  x.style.display="none";
}