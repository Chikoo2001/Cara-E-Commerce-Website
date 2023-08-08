window.onload = () => {
        mainImg.src = localStorage.getItem('img');
        amtDisplay.innerText = localStorage.getItem('amt');
    }

// Handling add to cart button

const addBtn = document.getElementById("add-cart");
const quantity = document.getElementById("quantity");

if(localStorage.getItem("cartItems") === null) {
    localStorage.setItem("cartItems", JSON.stringify([]));
}

if(localStorage.getItem("count") === null) {
    localStorage.setItem("count", 0);
}

addBtn.addEventListener("click", () => {
    let count = localStorage.getItem("count");
    const item = `<td><button class="deleteBtn" id="${count}"><i class="fa-solid fa-trash"></i></button></td>
        <td><img src="${mainImg.src}" alt=""></td>
        <td>Cartoon Astronaut T-Shirts</td>
        <td class="amt">${amtDisplay.innerText}</td>
        <td><input type="number" min="1" value="${quantity.value}"></td>
        <td class="subtotal">$${amtDisplay.innerText.slice(1) * quantity.value}</td>`;
    
    const tempArr = JSON.parse(localStorage.getItem("cartItems"));
    tempArr.push(item);

    localStorage.setItem("cartItems", JSON.stringify(tempArr));
    localStorage.setItem("count", ++count);
})

const cartButton = document.querySelectorAll(".cart-button");

cartButton.forEach( (button)=>{
    button.addEventListener('click',cartClick);
}); 

function cartClick(){
    let button = this;
    button.classList.add("clicked");  

    setTimeout(()=>{
    button.classList.remove("clicked");
    },2500)
}



