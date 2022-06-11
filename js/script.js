let card = document.querySelector(".card");
let search = document.querySelector(".search");
let links = document.querySelector(".links");
document.querySelector("#cart-btn").onclick = () =>{
    card.classList.toggle("active");
    search.classList.remove("active");
    links.classList.remove("active");
}
document.querySelector("#menu-btn").onclick = () =>{
    links.classList.toggle("active");
    search.classList.remove("active");
    card.classList.remove("active");
}
document.querySelector("#search-btn").onclick = () =>{
    search.classList.toggle("active");
    card.classList.remove("active");
    links.classList.remove("active");
}
window.onscroll =() =>{
    search.classList.remove("active");
    card.classList.remove("active");
    links.classList.remove("active");
}
