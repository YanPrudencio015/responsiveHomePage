let menu = document.querySelector('#menu');
let html = document.getElementById("site");

let dev = document.querySelectorAll("attribution");

document.getElementById("menubtn").onclick = () =>{
    menu.classList.toggle('active');
    html.classList.toggle('active');
    cont.classList.toggle('active');
  
}

document.getElementById("closebtn").onclick = () =>{
    menu.classList.remove('active');
    html.classList.remove('active');
  
}


window.scroll = () =>{

    dev.classList.remove("appers")

    if(window.scrollY >= 80){
        dev.classList.add("appers") 
    }else{
        dev.classList.remove("appers")
    }

}


