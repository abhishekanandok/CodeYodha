const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const container = document.querySelector(".container");

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
