let square = document.querySelector('.square');
square.style.position="relative";

let arrow = document.querySelector('#arrow');
arrow.style.opacity=0;

let x = 0;
let y = 0;

window.addEventListener("keydown", moveSquare);

function moveSquare(event){
    arrow.style.opacity = 1;

    if(event.key == "ArrowUp"){
        square.style.bottom = `${y+=40}px`;
        arrow.setAttribute("src", "/imgs/up.png");
    }else if(event.key == "ArrowDown"){
        square.style.bottom = `${y-=40}px`;
        arrow.setAttribute("src", "/imgs/down.png");
    }else if(event.key == "ArrowRight"){
        square.style.left = `${x+=40}px`;
        arrow.setAttribute("src", "/imgs/right.png");
    }else if(event.key == "ArrowLeft"){
        square.style.left = `${x-=40}px`;
        arrow.setAttribute("src", "/imgs/left.png");
    }

    // console.log(x);
}