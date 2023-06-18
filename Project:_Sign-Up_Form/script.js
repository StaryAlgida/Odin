const allInputs = document.querySelectorAll("input");
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#rpassword");


allInputs.forEach(element => {
    element.addEventListener("focus", () =>{
        element.style.borderColor = null;
    });

    if(element.value === ""){
        element.style.borderColor = "#e5e7eb";
    }
});


password2.addEventListener("focusout", () =>{
    if(password2.value !== password1.value){
        password2.style.borderColor = "red";
        password1.style.borderColor = "red";
    }
    else{
        password2.style.borderColor = null;
        password1.style.borderColor = null;
    }
})

