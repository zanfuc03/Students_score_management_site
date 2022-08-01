let btn = document.querySelector("#button");
let navbar = document.querySelector(".navigation");

btn.onclick = function() {
    navbar.classList.toggle("active");
}