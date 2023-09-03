function show_alert(title, message, btnLabel = "Go it, thanks!") {
  document.getElementById("modal-alert-title").innerHTML = title;
  document.getElementById("modal-alert-content").innerHTML = message;
  document.getElementById("modal-button-primary").innerText = btnLabel;
  document.getElementById("modal-alert").style.display = "block";
}

// form validate
const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const lowercaseRegex = /[a-z]/;
const numberRegex = /[0-9]/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = nameValidate.value;
  const emailValue = email.value;
  const passwordValue = password.value;
 


  if (!lowercaseRegex.test(nameValue) && !numberRegex.test(nameValue)) {
    errorName.style.display = "block";
} else {
    errorName.style.display = "none";
}

  if (!emailValue.match(emailPattern)) {
    errorEmail.style.display = "block";
  } else {
    errorEmail.style.display = "none";
  }
  if (passwordValue.length < 6) {
    errorPassword.style.display = "block";
  } else {
    errorPassword.style.display = "none";
  }
});


// Todo

