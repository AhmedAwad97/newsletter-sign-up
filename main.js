let box = document.querySelector(".box");
let form = document.querySelector("form");
let email = document.querySelector("input[type='email']");
let sbmtBtn = document.querySelector("button");
let validateEmail = document.querySelector(".validate");
validateEmail.style.cssText = `
color:red
`;

let successEmail = document.querySelector(".subs-email");
successEmail.style.cssText = `
color:hsl(234, 29%, 20%);
font-weight:bold;
`;

let sucessDiv = document.querySelector(".success");
let dismissMsg = document.querySelector(".dismiss");

let reg = /^\w+@[A-Za-z]{2,}\.[A-Za-z]{2,}$/gi;

sbmtBtn.addEventListener("click", (e) => {
  if (email.value === "") {
    e.preventDefault();
    validateEmail.innerHTML = "*Email Cant be empty";
  } else if (!reg.test(email.value)) {
    e.preventDefault();
    validateEmail.innerHTML = "*Invalid Email";
  } else {
    e.preventDefault();
    box.style.display = "none";
    successEmail.innerHTML = email.value;
    sucessDiv.style.display = "block";
  }
});

dismissMsg.addEventListener("click", () => {
  dismissMsg.parentNode.style.display = "none";
  box.style.display = "flex";
  form.reset();
});
