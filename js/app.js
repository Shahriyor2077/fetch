


// alert("salom")
// prompt("age ?")
// confirm("are you sure?")

// window.alert()
// alert()


// url, options
// fetch("qovun.uz", {
//     method: "GET",
// })

// fetch("qovun.uz", {
//     method: "POST",
//     body: {}
// })

// fetch("qovun.uz/2", {
//     method: "DELETE",
// })

// fetch("qovun.uz/2", {
//     method: "PETCH",
//     body: {}
// })


function fetchData(endpoint, callback){
    const promise = fetch(`https://dummyjson.com${endpoint}`) // return Promise
    promise 
        .then(response => {
            if(!response.ok){
                throw new Error('something went wrong')
            }
            return response.json()
        })
        .then(res => callback(res))
        .catch((err) => console.log(err))
        .finally()
}
fetchData("/products", createFood) // /recipes

const productWrapperEl = document.querySelector(".product-wrapper")

function createFood(data){
    data?.products?.forEach((item) => {
        const cardEl = document.createElement("div")
        cardEl.className = "product-card"

        cardEl.innerHTML = `
              <div class="product-card__image">
                    <img loading="lazy" src=${item.thumbnail} alt="">
                </div>
                <div class="product-card__body">
                    <h3>${item.title}</h3>
                    <strong>${item.price} USD</strong>
            </div>
        `
        productWrapperEl.appendChild(cardEl)
    })
}



fetchData("/products/category-list", createCategory) // /recipes

const categoryWrapperEl = document.querySelector(".category-wrapper")

console.log(categoryWrapperEl);


function createCategory (data){
    data.forEach((item) => {
        const liEl = document.createElement("li")
        liEl.innerHTML = item
        categoryWrapperEl.appendChild(liEl)
    })
    
}

// event delegation
categoryWrapperEl.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
        const category = event.target.innerHTML
        productWrapperEl.innerHTML = null
        fetchData(`/products/category/${category}`, createFood)
    }
        
})





// const promise = new Promise((resolve, reject)=> {
//     if(true){
//         resolve(5)
//     }else{
//         reject("xato")
//     }
// })

// promise
//     .then(res => res * 2)
//     .then(res => res / 5)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
