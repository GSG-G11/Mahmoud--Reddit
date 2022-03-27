const showComments = document.querySelector(".show-comment");
const addComment = document.querySelector(".add-comment");
const allComments = document.querySelector(".all-comments");
const addCommentSection = document.querySelector(".add-comment-section");

showComments.addEventListener("click", (e) => {
  e.preventDefault();
  if (allComments.style.display === "block") {
    allComments.style.display = "none";
  } else {
    allComments.style.display = "block";
  }
  fetch("/post", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(values),
  }).then(console.log);
  // .then((res) => {});
});
addComment.addEventListener("click", (e) => {
  e.preventDefault();
  if (addCommentSection.style.display === "block") {
    addCommentSection.style.display = "none";
  } else {
    addCommentSection.style.display = "block";
  }
});
