fetch("https://dummyjson.com/users")
  .then(response => response.json())
  .then(data => {
    const usersWrapper = document.querySelector(".users-wrapper");
    
    data.users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
        <img src="${user.image}" alt="${user.firstName}">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Email: ${user.email}</p>
        <p>Yoshi: ${user.age}</p>
      `;
      usersWrapper.appendChild(userCard);
    });
  })
  .catch(error => console.log("Xatolik:", error)); 