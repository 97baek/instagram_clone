const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector(".btn-login");

let idCheck = false;
let passwdCheck = false;

loginForm.addEventListener("keyup", (e) => {
  console.log(e.target.parentNode.childNodes[1]);
  if (e.target.value.length !== 0) {
    e.target.parentNode.childNodes[1].classList.add("focus");
    e.target.classList.add("focus");
  } else {
    e.target.parentNode.childNodes[1].classList.remove("focus");
    e.target.classList.remove("focus");
  }

  if (e.target.dataset.key === "id" && e.target.value !== "") {
    idCheck = true;
  } else if (e.target.dataset.key === "id" && e.target.value === "") {
    idCheck = false;
  }
  if (e.target.dataset.key === "passwd" && e.target.value.length > 5) {
    passwdCheck = true;
  } else if (e.target.dataset.key === "passwd" && e.target.value.length <= 5) {
    passwdCheck = false;
  }

  console.log(idCheck);
  console.log(passwdCheck);

  if (idCheck && passwdCheck) {
    loginBtn.classList.add("active");
  } else {
    loginBtn.classList.remove("active");
  }
});
