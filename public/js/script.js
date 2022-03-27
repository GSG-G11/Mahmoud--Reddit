const showComments = document.querySelector(".show-comment");
const allComments = document.querySelector(".all-comments");

showComments.addEventListener("click", (e) => {
  e.preventDefault();
  if (allComments.style.display === "block") {
    allComments.style.display = "none";
  } else {
    allComments.style.display = "block";
  }
});
