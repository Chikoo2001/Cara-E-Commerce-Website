// Responsive Navbar

const bar = document.getElementById("bar");
const navList = document.getElementById("nav-list");
const close = document.getElementById("close");

bar.addEventListener("click", () => {
    navList.classList.add("active");
});

close.addEventListener("click", () => {
    navList.classList.remove("active");
});

// Select products in sproduct page

const mainImg = document.getElementById("main-img");
const products = document.getElementsByClassName("pro");
const url = window.location.pathname;
const filename = url.substring(url.lastIndexOf('/')+1);
const amtDisplay = document.getElementById("amt");
const quantityInput = document.getElementById("quantity");

for(let pro of products) {
    pro.addEventListener("click", (e) => {
        const img = pro.querySelector("img");
        const amt = pro.querySelector("h4");
        let imgSrc = img.src;
        let amount = amt.innerText;
        if(filename !== "sproduct.html"){
            localStorage.setItem("img", imgSrc);
            localStorage.setItem("amt", amount);
            const location = window.location.pathname.substring(url.lastIndexOf('/') + 1);
            if(location == "index.html" || location == "") {
                window.location.href="pages/sproduct.html";
            } else {
                window.location.href = "sproduct.html";
            }
            
        }
        else {
            mainImg.src = imgSrc;
            amtDisplay.innerText = amount;
            quantityInput.value = 1;
            window.location.hash="pro-details";
            location.hash = "";
        }
        
    })
}





