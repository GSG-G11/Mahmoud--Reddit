const showComments = document.querySelector(".show-comment");
const addComment = document.querySelector(".add-comment");
const allComments = document.querySelector(".all-comments");
const addCommentSection = document.querySelector(".add-comment-section");
const addCommentButton = document.querySelector(".add-comment-button");
const comment = document.querySelector(".comment-form-input");
const errorMessage = document.querySelector("#errors-message");
const closePost = document.querySelector(".cancel");
const openPost = document.querySelector(".open-button");

let inputError = [];
showComments.addEventListener("click", (e) => {
  e.preventDefault();
  if (allComments.style.display === "block") {
    allComments.style.display = "none";
  } else {
    allComments.style.display = "block";
  }
});
addComment.addEventListener("click", (e) => {
  e.preventDefault();
  if (addCommentSection.style.display === "block") {
    addCommentSection.style.display = "none";
  } else {
    addCommentSection.style.display = "block";
  }
});

addCommentButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (comment.value.trim() === "") {
    inputError.push("Comment is required");
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
});

openPost.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myForm").style.display = "block";
});
closePost.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myForm").style.display = "none";
});
