const container = document.querySelector('.container');
const range = document.querySelector('#range');
const resize = document.querySelector('#size');

let isDrawing = false;

resize.addEventListener("mouseup", () =>{ 
    clear_container()
    resize_container(resize.value);
})

resize.addEventListener("mousemove", () => {
    range.innerHTML = resize.value;
})

container.addEventListener("mousedown", () =>{
    isDrawing = true;
})

container.addEventListener("mouseup", () =>{
    isDrawing = false;
})

const clear_container = () =>{
    container.innerHTML='';
}

const set_up = (s) =>{
    resize.value = s;
    resize_container(s)
}

const resize_container = (s) =>{
    let size = Math.pow(s, 2);
    container.style.gridTemplateColumns = `repeat(${s}, auto)`;
    let blockWidthHeight = (600/s).toString()+'px';
    console.log(blockWidthHeight);
    let divs = [];

    for (let i = 0; i < size; i++)
    {
        divs.push(document.createElement('div'));
        
        divs[i].addEventListener("mousemove", ()=> {
            if (isDrawing){
                divs[i].style.backgroundColor = "black";
            }
        })
        container.appendChild(divs[i]);
    }
}

window.onload = set_up(16)

