console.log("JavaScript is connected!");

const form = document.getElementById("feedback-form");
const nameInput = document.getElementById("reviewer-name");
const ratingInput = document.getElementById("rating");
const commentsInput = document.getElementById("comments");

const errorBox = document.getElementById("error-box");
const successMessage = document.getElementById("success-message");
const welcomeMessage = document.getElementById("welcome-message");

let savedName = localStorage.getItem("reviewerName");

if (savedName) {
    welcomeMessage.textContent =
        "Welcome back, " + savedName +
        "! Ready to submit another wonderful review?";

    nameInput.value = savedName;
}

form.addEventListener("submit", function(event) {


    event.preventDefault();

    let name = nameInput.value.trim();
    let rating = Number(ratingInput.value);
    let comments = commentsInput.value;
});
