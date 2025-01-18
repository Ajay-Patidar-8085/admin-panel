const body = document.querySelector("body");
const sidebar = document.querySelector("nav");
const modeToggle = body.querySelector(".mode-toggle");
const sidebarToggle = body.querySelector(".sidebar-toggle");


modeToggle.addEventListener("click", ()=>{


    body.classList.toggle("dark");

});

sidebarToggle.addEventListener("click",()=>{

     sidebar.classList.toggle("close");

});
