fetch("https://dummyjson.com/posts")
  .then(response => response.json())
  .then(data => {
    const foodWrapper = document.querySelector(".food-wrapper");
    
    data.posts.forEach(post => {
      const foodCard = document.createElement("div");
      foodCard.className = "food-card";
      foodCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <small>User ID: ${post.userId}</small>
      `;
      foodWrapper.appendChild(foodCard);
    });
  })
  .catch(error => console.log("Xatolik:", error)); 