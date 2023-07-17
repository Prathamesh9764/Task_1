let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

const redirectToSuccessPage = () => {
  window.location.href = 'task1.html';
};

// Get the register buttons
const registerButtons = document.querySelectorAll('.register-btn');
// const loginButtons = document.querySelectorAll('.login');
// Add event listeners to the register buttons
registerButtons.forEach(button => {
  alert('Login the Webinar!');
  button.addEventListener('click', () => {
    // Replace with your desired registration logic
    // For example, making an API request to register the user

    alert('Thank you for registering!');
    registerUser()
      .then(() => {
        redirectToSuccessPage();
      })
      .catch(error => {
        
        console.error('Registration failed:', error);
      });
  });
});

