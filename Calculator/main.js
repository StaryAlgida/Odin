let buttons  = Array.from(document.querySelectorAll("input[type=button]"));

const back = document.querySelector("#background-text");
const main = document.querySelector("#text-main");

const dzialania = ["/", "x", "+", "-"];

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
                
                updateBackStr();
            }
            else{
                makeMath();
                
                memory["numberBack"] = memory["result"];
                memory["mathOp"] = bt.value;
                
                updateMainStr(memory["numberBack"]);
                
                memory["numberMain"] = '';
                memory["dotFlag"] = false;

                updateBackStr();
            }
        });
    }

    else if(bt.value === "."){
        if (!memory["dotFlag"]){
            memory["numberMain"] += ".";
            memory["dotFlag"] = true;
        }
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
        case "/":
            memory["result"] = Number(memory["numberBack"]) / Number(memory["numberMain"]);
            break;
    }
}

function updateMainStr(str){
    main.innerHTML = str;
}

function updateBackStr(){
    back.innerHTML = `${memory["numberBack"]} ${memory["mathOp"]}`;
}