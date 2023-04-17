const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", myFunction);

function myFunction() {
  var u = document.getElementById("username");
  console.log(u.value);
  var e = document.getElementById("email");
  console.log(e.value);
  // e.value.reset();
  // e.reset();
  var p = document.getElementById("phone");
  console.log(p.value);

  var pa = document.getElementById("pass");
  console.log(pa.value);
}
