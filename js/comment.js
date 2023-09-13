const userCommentRow = document.querySelector(".user-comment-row");

const query = new URLSearchParams(location.search);

const postId = query.get("postId");

userCommentRow.innerHTML = `<div class="loader loadingio-spinner-magnify-3l5v4i2w3az"><div class="ldio-djvbccvlp2d">
<div><div><div></div><div></div></div></div>
</div></div>`;

getData(
  `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  (posts) => {
    userCommentRow.innerHTML = "";
    posts.map((album) => {
      userCommentRow.innerHTML += `<div class="user">
      <h6 class="post-email">${album.email}</h6>
      <h3 class="post-title">${album.name}</h3>
      <p  class="post-body">${album.body}</p>
   </div>`;
    });
  }
);


