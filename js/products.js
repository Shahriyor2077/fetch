fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    const productsWrapper = document.querySelector(".products-wrapper");
    
    data.products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <strong>Narxi: $${product.price}</strong>
      `;
      productsWrapper.appendChild(productCard);
    });
  })
  .catch(error => console.log("Xatolik:", error)); 