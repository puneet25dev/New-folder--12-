let signup_btn=document.querySelector(".signup_btn");
let input=document.querySelector("input");

if(input.value.trim()!== ""){
    
    signup_btn.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("form submitted!");
    })
}