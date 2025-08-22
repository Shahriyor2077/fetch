fetch("https://dummyjson.com/comments")
  .then(response => response.json())
  .then(data => {
    const commentsWrapper = document.querySelector(".comments-wrapper");
    
    data.comments.forEach(comment => {
      const commentCard = document.createElement("div");
      commentCard.className = "comment-card";
      commentCard.innerHTML = `
        <p>${comment.body}</p>
        <small>Post ID: ${comment.postId}</small>
      `;
      commentsWrapper.appendChild(commentCard);
    });
  })
  .catch(error => console.log("Xatolik:", error)); 