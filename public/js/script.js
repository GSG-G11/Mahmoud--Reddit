const errorPostMessage = document.querySelector("#errors-message-post");
const closePost = document.querySelector(".cancel");
const openPost = document.querySelector(".open-button");
const addPostBtn = document.querySelector(".btn-add-post");
const titlePost = document.querySelector(".title-input-form");
const describtionPost = document.querySelector(".describtion-input-form");
const posts = document.querySelector(".posts");
const namesDiv = document.querySelector(".user-name-div");
const loginButton = document.querySelector(".log-in-button");
const signUpButton = document.querySelector(".sign-up-button");
const userName = document.querySelector(".user-name");
const logOut = document.querySelector(".log-out-button");

let inputError = [];

namesDiv.style.display = "none";

openPost.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myForm").style.display = "block";
});

closePost.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myForm").style.display = "none";
});

addPostBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (titlePost.value.trim() === "") {
    inputError.push("Title is required");
  }
  if (describtionPost.value.trim() === "") {
    inputError.push("Describtion is required");
  }
  while (errorPostMessage.firstChild) {
    errorPostMessage.removeChild(errorPostMessage.lastChild);
  }
  if (inputError.length !== 0) {
    inputError.forEach((e) => {
      const msg = document.createElement("h3");
      msg.textContent = e;
      errorPostMessage.appendChild(msg);
    });
    inputError = [];
    return;
  }
  const values = {
    title: titlePost.value,
    description: describtionPost.value,
  };
  fetch("/post", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "Post successfully added") {
        // eslint-disable-next-line no-undef
        swal("Posted!", "posted successfully", "success");
      } else {
        // eslint-disable-next-line no-undef
        swal("Please login to add post", res.message, "error");
      }
    })
    .then(() => {
      titlePost.value = "";
      describtionPost.value = "";
    });
  getPosts();
});

const displayPosts = (data) => {
  while (posts.firstChild) {
    posts.removeChild(posts.lastChild);
  }
  data.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("single-post");
    const sideVotes = document.createElement("aside");
    sideVotes.classList.add("votes");
    const upButton = document.createElement("button");
    upButton.classList.add("up-button");
    const downButton = document.createElement("button");
    downButton.classList.add("down-button");
    const upIcon = document.createElement("i");
    upIcon.classList.add("ri-arrow-up-line");
    const downIcon = document.createElement("i");
    downIcon.classList.add("ri-arrow-down-line");
    const votes = document.createElement("h4");
    votes.textContent = 0;
    const coloumnFlex = document.createElement("div");
    coloumnFlex.classList.add("column-flex");
    const sectionNameInPost = document.createElement("section");
    sectionNameInPost.classList.add("name-in-post");
    const nameSection = document.createElement("div");
    nameSection.classList.add("name-section");
    const postedBy = document.createElement("p");
    postedBy.classList.add("posted-by");
    postedBy.textContent = "Posted By/";
    const ownerPost = document.createElement("p");
    ownerPost.classList.add("owner-post");
    ownerPost.textContent = post.name;
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("time-div");
    const time = document.createElement("p");
    time.classList.add("time");
    time.textContent = post.created_at;
    const titleAndDescribtionSection = document.createElement("section");
    titleAndDescribtionSection.classList.add("title-and-description");
    const titlePost = document.createElement("h2");
    titlePost.classList.add("title-post");
    titlePost.textContent = post.title;
    const describtionPost = document.createElement("p");
    describtionPost.classList.add("description-post");
    describtionPost.textContent = post.description;
    const commentsSide = document.createElement("aside");
    commentsSide.classList.add("comments-side");
    const showComment = document.createElement("button");
    showComment.classList.add("show-comment");
    showComment.textContent = "Show Comments";
    const commentIcon = document.createElement("i");
    commentIcon.classList.add("ri-message-2-line");
    const addcomments = document.createElement("button");
    addcomments.classList.add("add-comment");
    addcomments.textContent = "Add Comment";
    const addCommentIcon = document.createElement("i");
    addCommentIcon.classList.add("ri-chat-new-fill");
    const addCommentSection = document.createElement("section");
    addCommentSection.classList.add("add-comment-section");
    const commentForm = document.createElement("form");
    commentForm.classList.add("add-comment-form");
    const commentText = document.createElement("textarea");
    commentText.classList.add("comment-form-input");
    const errorsMessage = document.createElement("div");
    errorsMessage.setAttribute("id", "errors-message");
    const addCommentButton = document.createElement("button");
    addCommentButton.textContent = "Add";
    addCommentButton.classList.add("add-comment-button");

    posts.appendChild(postDiv);
    postDiv.appendChild(sideVotes);
    sideVotes.appendChild(upButton);
    upButton.appendChild(upIcon);
    sideVotes.appendChild(votes);
    sideVotes.appendChild(downButton);
    downButton.appendChild(downIcon);
    postDiv.appendChild(coloumnFlex);
    coloumnFlex.appendChild(sectionNameInPost);
    sectionNameInPost.appendChild(nameSection);
    nameSection.appendChild(postedBy);
    nameSection.appendChild(ownerPost);
    sectionNameInPost.appendChild(timeDiv);
    timeDiv.appendChild(time);
    coloumnFlex.appendChild(titleAndDescribtionSection);
    titleAndDescribtionSection.appendChild(titlePost);
    titleAndDescribtionSection.appendChild(describtionPost);
    coloumnFlex.appendChild(commentsSide);
    commentsSide.appendChild(showComment);
    showComment.appendChild(commentIcon);
    commentsSide.appendChild(addcomments);
    addcomments.appendChild(addCommentIcon);
    coloumnFlex.appendChild(addCommentSection);
    addCommentSection.appendChild(commentForm);
    commentForm.appendChild(commentText);
    commentForm.appendChild(errorsMessage);
    commentForm.appendChild(addCommentButton);
    fetch(`/comment/${post.id}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "comments successfully get it") {
          res.comments.forEach((comment) => {
            const allCommentsDiv = document.createElement("div");
            allCommentsDiv.classList.add("all-comments");
            const commentSection = document.createElement("section");
            commentSection.classList.add("comment-section");
            const nameInComment = document.createElement("div");
            nameInComment.classList.add("name-in-comment");
            const commentNameSection = document.createElement("div");
            commentNameSection.classList.add("comment-name-section");
            const commentBy = document.createElement("p");
            commentBy.textContent = "Comment By/";
            commentBy.classList.add("comment-by");
            const commentOwner = document.createElement("p");
            commentOwner.textContent = comment.name;
            commentOwner.classList.add("owner-comment");
            const commentTimeDiv = document.createElement("div");
            commentTimeDiv.classList.add("comment-time-div");
            const commentTime = document.createElement("p");
            commentTime.textContent = comment.created_at;
            commentTime.classList.add("comment-time");
            const commentDecription = document.createElement("p");
            commentDecription.textContent = comment.description;
            commentDecription.classList.add("comment-description");
            const hr = document.createElement("hr");
            coloumnFlex.appendChild(allCommentsDiv);
            allCommentsDiv.appendChild(commentSection);
            commentSection.appendChild(nameInComment);
            nameInComment.appendChild(commentNameSection);
            commentNameSection.appendChild(commentBy);
            commentNameSection.appendChild(commentOwner);
            nameInComment.appendChild(commentTimeDiv);
            commentTimeDiv.appendChild(commentTime);
            commentSection.appendChild(commentDecription);
            commentSection.appendChild(hr);
            showComment.addEventListener("click", (e) => {
              e.preventDefault();
              if (allCommentsDiv.style.display === "block") {
                allCommentsDiv.style.display = "none";
              } else {
                allCommentsDiv.style.display = "block";
              }
            });
          });
        } else {
          showComment.addEventListener("click", (e) => {
            e.preventDefault();
            // eslint-disable-next-line no-undef
            swal("No comments Found", "No comments", "error");
          });
        }
      });

    addcomments.addEventListener("click", (e) => {
      e.preventDefault();
      if (addCommentSection.style.display === "block") {
        addCommentSection.style.display = "none";
      } else {
        addCommentSection.style.display = "block";
      }
    });

    addCommentButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(post.id);
      if (commentText.value.trim() === "") {
        inputError.push("Comment is required");
      }
      while (errorsMessage.firstChild) {
        errorsMessage.removeChild(errorsMessage.lastChild);
      }
      if (inputError.length !== 0) {
        inputError.forEach((e) => {
          const msg = document.createElement("h3");
          msg.textContent = e;
          errorsMessage.appendChild(msg);
        });
        inputError = [];
        return;
      }
    });
  });
};

const getPosts = () => {
  fetch("/posts", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => displayPosts(res.data));
};

getPosts();

fetch("/getUserName", {
  method: "get",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message === "User exists") {
      namesDiv.style.display = "flex";
      logOut.style.display = "flex";
      loginButton.style.display = "none";
      signUpButton.style.display = "none";
      userName.textContent = res.name;
    } else {
      namesDiv.style.display = "none";
      logOut.style.display = "none";
      loginButton.style.display = "flex";
      signUpButton.style.display = "flex";
    }
  });

logOut.addEventListener("click", () => {
  fetch("/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "log out success") {
        namesDiv.style.display = "none";
        logOut.style.display = "none";
        loginButton.style.display = "flex";
        signUpButton.style.display = "flex";
      }
    });
});
