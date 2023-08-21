 var list = document.querySelector(".list");
    var menu = document.getElementById("menu");
    menu.addEventListener("click",()=>{
        menu.classList.toggle("active");
        list.classList.toggle("open");
    })
