//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("submit");

  // let form = document.querySelector("form");
  button.addEventListener("click", function () {
    // .preventDefault(); // Prevent the form from actually submitting

    let username = document.getElementById("name").value;
    let useremail = document.getElementById("email").value;
    let userpassword = document.getElementById("password").value;
    let usercnpassword = document.getElementById("confirm-password").value;
    if (userpassword == usercnpassword) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("useremail", useremail);
      sessionStorage.setItem("userpassword", userpassword);
      sessionStorage.setItem("usercnpassword", usercnpassword);
    } else {
      alert("Password do not match");
    }
  });
});