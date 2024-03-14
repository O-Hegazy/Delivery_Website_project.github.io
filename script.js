let up = document.querySelector(".up");
window.onscroll = function(){
  this.scrollY >=200 ? up.classList.add("show") : up.classList.remove("show");
}

up.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

function validateForm() {
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var product = document.getElementById("product").value;
  var quantity = document.getElementById("quantity").value;

  if (first_name === "") {
    alert("Please enter your first name");
    return false;
  }

  if (last_name === "") {
    alert("Please enter your last name");
    return false;
  }

  if (email === "") {
    alert("Please enter your email address");
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}