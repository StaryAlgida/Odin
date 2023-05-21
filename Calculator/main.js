let buttons  = Array.from(document.querySelectorAll("input[type=button]"));

const back = document.querySelector("#background-text");
const main = document.querySelector("#text-main");

const dzialania = ["÷", "x", "+", "-"];

let memory = {
    result:0,
    numberMain:'',
    numberBack:'',
    mathOp:'',
    flagMathOp:false,
    dotFlag: false
}

buttons.map(bt =>{
    if(Number(bt.value) || bt.value === "0"){
        
        bt.addEventListener('click', () =>{
            memory["numberMain"] += bt.value;
            updateMainStr(memory["numberMain"]);
        });
    }

    else if(dzialania.includes(bt.value)){
        
        bt.addEventListener('click', () =>{
            if(!memory["flagMathOp"]){
                
                memory["numberBack"] = memory["numberMain"];
                memory["mathOp"] = bt.value;
                memory["numberMain"] = '';
                
                memory["flagMathOp"] = true;
                memory["dotFlag"] = false;
                updateBackStr(memory["numberBack"], memory["mathOp"]);
            }
            else{
                makeMath();
                
                memory["numberBack"] = memory["result"];
                memory["mathOp"] = bt.value;
                
                updateMainStr(memory["numberBack"]);
                
                memory["numberMain"] = '';
                memory["dotFlag"] = false;

                updateBackStr(memory["numberBack"], memory["mathOp"]);
            }
        });
    }

    else if(bt.value === "."){
        bt.addEventListener('click', () =>{
            if (!memory["dotFlag"]){
                memory["numberMain"] += ".";
                memory["dotFlag"] = true;
            }
        });
        
    }

    else if(bt.value === "="){
        bt.addEventListener('click', () =>{
            updateBackStr(memory["numberBack"], memory["mathOp"], memory["numberMain"]);
            console.table(memory);
            makeMath();
            
            updateMainStr(memory["result"]);
            memory["numberBack"] = memory["result"];
            memory["numberMain"] = '';
        });
    }

    else if(bt.value ==="Clear"){
        bt.addEventListener('click', () =>{
            memory["numberBack"] = '';
            memory["numberMain"] = '';

            updateMainStr(memory["numberMain"]);
            updateBackStr(memory["numberBack"]);
        });
    }

    else if(bt.value ==="Delete"){
        bt.addEventListener('click', () =>{
            memory["numberMain"] = memory["numberMain"].slice(0,-1);
           console.log(memory["numberMain"]);
           updateMainStr(memory["numberMain"]);
        });
    }

});

function makeMath(){
    switch(memory["mathOp"]){
        case "+":
            memory["result"] = Number(memory["numberBack"]) + Number(memory["numberMain"]);
            break;
        case "-":
            memory["result"] = Number(memory["numberBack"]) - Number(memory["numberMain"]);
            break;
        case "x":
            memory["result"] = Number(memory["numberBack"]) * Number(memory["numberMain"]);
            break;
        case "÷":
            memory["result"] = Number(memory["numberBack"]) / Number(memory["numberMain"]);
            break;
    }
}

function updateMainStr(str){
    main.innerHTML = str;
}

function updateBackStr(){
    let str = '';
    argsArray = Array.from(arguments);
    argsArray.forEach(element => {
        str += `${element} `;
    });
    back.innerHTML = str;
}