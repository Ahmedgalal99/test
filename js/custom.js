// start scroll navbar changecoler

window.addEventListener("scroll" , ()=>{
    if(scrollY > 10 ){
       document.querySelector(".nav_bar").style.background = "#FFF1DA";
    }

    else if(scrollY < 10 ){
       document.querySelector(".nav_bar").style.background = "transparent";
    }
})