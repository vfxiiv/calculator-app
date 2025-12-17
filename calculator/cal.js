// global variables 
let firstNum=''; //string
let operator=''; //string
let newNum=true; //boolean 

// addNumber function
function addNumber(num){
    let display= document.getElementById('display');
    console.log(display);
    if(newNum)
    {
        display.value=num;
        newNum=false;
    }
    else{
        /* display.value = display.value +num; */
        display.value +=num; 
    }


}

// function addOperator
function addOperator(op){
    let display = document.getElementById('display'); //scope of display variable is local
    firstNum = display.value; //scope is global
    operator=op; //scope is global
    newNum=true; //scope is global
}

// function calculate
function calculate(){
    let display = document.getElementById('display');
    let result;
    let num1= Number(firstNum);
    let num2=Number(display.value);
    if (operator ==='+') //can use double or single quot
        {
        result= num1+num2;

    }
    else if(operator==='-'){
        result = num1-num2;
    }
    else if(operator==='*'){
        result=num1*num2;

    }
     else if(operator==='/'){
        result=num1/num2;
        
    }
    else{
        return;
    }
    display.value=result;
    firstNum='';
    operator='';
    newNum=true;

}

//function clearDisplay

function clearDisplay(){
    document.getElementById('display').value='';
    firstNum='';
    operator='';
    newNum=true;
    
}
