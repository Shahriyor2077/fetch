const usersWrapperEl = document.querySelector(".users-wrapper");

function fetchData(endpoint, callback) {
  const promise = fetch(`https://dummyjson.com${endpoint}`);
  promise
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      return response.json();
    })
    .then((res) => callback(res))
    .catch((err) => console.log(err));
}

fetchData("/users", createUsers);

function createUsers(data) {
  console.log(data);

  data?.users?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "user-card";

    cardEl.innerHTML = `
      <div class="user-card__image">
        <img loading="lazy" src="${item.image}" alt="${item.firstName}">
      </div>
      <div class="user-card__body">
        <h3>${item.firstName} ${item.lastName}</h3>
        <strong>${item.email}</strong>
      </div>
    `;

    usersWrapperEl.appendChild(cardEl);
  });
}
