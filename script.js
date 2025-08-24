let bar=document.querySelector(".bar_i");
let side_bar=document.querySelector(".side_bar");


let isSidebarVisible = false;

bar.addEventListener("click", () => {
    isSidebarVisible = !isSidebarVisible;
    side_bar.style.display = isSidebarVisible ? "flex" : "none";
});


// Exams Tab button fetching

let exam_tabs=document.querySelectorAll(".exam_tabs");

exam_tabs.forEach(el => console.log(el));


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


let ssc_exams = document.querySelector(".ssc_exams");
let ssc_exams_list = document.querySelector(".ssc_exams_list");

ssc_exams.addEventListener("click",()=>{
    if(ssc_exams_list){
        ssc_exams_list.style.transform="translateX(0%)";
        banking_exams_list.style.transform="translateX(150%)";
    }
})

let banking_exams_list=document.querySelector(".banking_exams_list");
let banking_exams=document.querySelector(".banking_exams");

banking_exams.addEventListener("click",()=>{
    if(banking_exams_list){
        ssc_exams_list.style.transform="translateX(150%)";
        banking_exams_list.style.transform="translateX(0%)";
    }
})









