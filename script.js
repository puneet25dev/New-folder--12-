let bar=document.querySelector(".bar_i");
let side_bar=document.querySelector(".side_bar");


let isSidebarVisible = false;

bar.addEventListener("click", () => {
    isSidebarVisible = !isSidebarVisible;
    side_bar.style.display = isSidebarVisible ? "flex" : "none";
});

