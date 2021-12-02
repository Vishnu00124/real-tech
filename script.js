var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span1 = document.getElementsByClassName("cl")[0];

var span2 = document.getElementsByClassName("cl")[1];

btn.onclick = function() {
  modal.style.display = "block";
}

span1.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

