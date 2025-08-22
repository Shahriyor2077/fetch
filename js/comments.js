const commentsWrapperEl = document.querySelector(".comments-wrapper");

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

fetchData("/comments", createComments);

function createComments(data) {
  console.log(data);

  data?.comments?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "comments-card";

    cardEl.innerHTML = `
      <div class="comments-card__body">
        <h3>${item.user.username}</h3>
        <strong>${item.body}</strong>
      </div>
    `;

    commentsWrapperEl.appendChild(cardEl);
  });
}
