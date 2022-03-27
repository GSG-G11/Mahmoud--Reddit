const sumbitButton = document.querySelector(".signup-form-button");
const userName = document.querySelector(".signup-form-name");
const email = document.querySelector(".signup-form-email");
const password = document.querySelector(".signup-form-password");
const errorMessage = document.querySelector("#errors-message");
let inputError = [];
sumbitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value.trim() === "") {
    inputError.push("userName is required");
  }
  if (email.value.trim() === "") {
    inputError.push("Email is required");
  }
  if (!email.value.includes("@")) {
    inputError.push("Email is invalid");
  }
  if (
    !password.value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ) {
    inputError.push(
      "Password must contain at least one number, one lowercase and one uppercase letter and one special charcater, and at least 8 characters long"
    );
  }
  while (errorMessage.firstChild) {
    errorMessage.removeChild(errorMessage.lastChild);
  }
  if (inputError.length !== 0) {
    inputError.forEach((e) => {
      const msg = document.createElement("h3");
      msg.textContent = e;
      errorMessage.appendChild(msg);
    });
    inputError = [];
    return;
  }
  const values = {
    name: userName.value,
    email: email.value,
    password: password.value,
  };
  fetch("/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((res) => {
      const msg = document.createElement("h3");
      msg.textContent = res.message;
      errorMessage.appendChild(msg);
    });
});
