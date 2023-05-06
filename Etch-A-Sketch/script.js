const container = document.querySelector('.container');
const range = document.querySelector('#range');
const resize = document.querySelector('#size');


resize.addEventListener("mouseup", () =>{ 
    clear_container()
    resize_container(resize.value);
})

resize.addEventListener("mousemove", () => {
    range.innerHTML = resize.value;
})

const clear_container = () =>{
    let elements = document.querySelectorAll('.pixel')
    elements.forEach(pixel => pixel.parentNode.removeChild(pixel))
    console.log(elements.length);
    // elements.parentNode.removeChild(elements)
}

const resize_container = (s) =>{
    let size = Math.pow(s, 2);
    let blockWidthHeight = (600/s).toString()+'px';
    console.log(blockWidthHeight);
    let divs = [];

    for (let i = 0; i < size; i++)
    {
        divs.push(document.createElement('div'));
        divs[i].className ='pixel';
        divs[i].style.minWidth = blockWidthHeight;
        // divs[i].style.height = blockWidthHeight;

        divs[i].addEventListener("mousedown", ()=> {
            divs[i].style.backgroundColor = "black";
        })

        container.appendChild(divs[i]);
    }
}


resize_container(64)


// console.log(divs.length);