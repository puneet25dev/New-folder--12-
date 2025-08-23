let bar=document.querySelector(".bar_i");
let side_bar=document.querySelector(".side_bar");


let isSidebarVisible = false;

bar.addEventListener("click", () => {
    isSidebarVisible = !isSidebarVisible;
    side_bar.style.display = isSidebarVisible ? "flex" : "none";
});


// Exams Tab button fetching

let exam_tabs=document.querySelectorAll(".exam_tabs");

// exam_tabs.forEach(el => console.log(el));

exam_tabs.forEach(el => {
    let buttons = el.querySelectorAll("button");
    buttons.forEach(btn => btn.addEventListener("click", () => {
        buttons.forEach(b => {b.style.backgroundColor = "",b.style.color="black"});
        
        btn.style.backgroundColor = "purple";
        btn.style.color = "white";
    }));
});

let get_started=document.querySelector(".get_started");

get_started.addEventListener("click",()=>{
    window.location.href="signup.html"
})

let get_start_btn=document.querySelector(".get_start_btn");

get_start_btn.addEventListener("click",()=>{
    window.location.href="signup.html"
})






