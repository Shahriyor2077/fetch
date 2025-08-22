const productsWrapperEl = document.querySelector(".products-wrapper");

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

fetchData("/products", createProducts);

function createProducts(data) {
  console.log(data);

  data?.products?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "product-card";

    cardEl.innerHTML = `
      <div class="product-card__image">
        <img loading="lazy" src="${item.thumbnail}" alt="${item.title}">
      </div>
      <div class="product-card__body">
        <h3>${item.title}</h3>
        <strong>$${item.price}</strong>
      </div>
    `;

    productsWrapperEl.appendChild(cardEl);
  });
}
