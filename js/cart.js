// Adding elements in the cart

function displayItems() {
    const tableItems = document.getElementById("table-items");
    const itemsArr = JSON.parse(localStorage.getItem("cartItems"));

    for(let i = 0; i < localStorage.getItem("count"); i++) {
        const element = document.createElement("tr");
        element.innerHTML = itemsArr[i];
        tableItems.appendChild(element);
        
    }
} 

function displayBlankRow() {
    const blankRow = document.getElementById("blank");
    const count = localStorage.getItem("count");
    console.log(typeof count);
    if(count == 0 || count === null) {
        blankRow.classList.remove("empty-cart");
        console.log("Executed remove");
    } else {  
        blankRow.classList.add("empty-cart");
        console.log("Executed add");
    }
}

displayItems();
displayBlankRow();
updateTotal();
addDelete();

//Update cart total table 

function updateTotal() {
    const allSubTotals = document.getElementsByClassName("subtotal");
    const finalSubtotalContainer = document.getElementById("final-subtotal");
    const shipping = document.getElementById("shipping");
    const finalAmtContainer = document.getElementById("final-amt");

    let finalSubtotal = 0;

    for(let i of allSubTotals) {
        finalSubtotal += parseInt(i.innerText.slice(1));
    }

    finalSubtotalContainer.innerText = `$${finalSubtotal}`;

    if (finalSubtotal <= 250 && finalSubtotal > 0) {
        shipping.innerText = "$100";
    } else {
        shipping.innerText = "$0";
    }

    finalAmtContainer.innerText = `$${finalSubtotal + parseInt(shipping.innerText.slice(1))}`;
}

//Update subtotal

const itemsInput = document.querySelectorAll("input[type=number]");

for (let i of itemsInput) {
    i.addEventListener("input", (e) => {
        const parent = e.target.parentElement.parentElement;
        let amt = parent.querySelector(":nth-child(4)").innerText.slice(1);
        const subtotal = parent.querySelector(":nth-child(6)");
        subtotal.innerText = `$${amt * e.target.value}`;
        updateTotal();
    })
} 

// Add event listeners to deleteBtn
function addDelete() {
    const deleteBtn = document.getElementsByClassName("deleteBtn");

    console.log(deleteBtn)
    for(let i of deleteBtn){
        // console.log(i);
        i.addEventListener("click", (e) => {
            handleDelete(e);
        })
    }
}

function handleDelete(event) {
    const index = event.target.id;
    let count = localStorage.getItem("count");
    event.target.parentElement.parentElement.remove();
    const tempArr = JSON.parse(localStorage.getItem("cartItems"));
    tempArr.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(tempArr));
    localStorage.setItem("count", --count);
    displayBlankRow();
    updateTotal();
}



