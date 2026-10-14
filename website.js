const formElement=document.getElementById("contactForm")

if (formElement) {
  formElement.addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    if (name == "") {
      alert("Please enter your name.");
    } else {
      alert("Thanks " + name + "! Your message was sent.");  //maybe update this in the future and make it nicer?
      formElement.reset();
    }
  });
}


