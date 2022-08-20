function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(cal,a,b){
    switch(cal){
        case '+':
            return add(a,b)
            break
        case '-':
            return subtract(a,b)
            break
        case '*':
            return multiply(a,b)
            break
        case '/':
            return divide(a,b)
            break
    }
}
let input_str = ''
const display = document.querySelector('.display input')
const num_btns = document.querySelectorAll('.num_btns button')
for(let i = 0; i < num_btns.length;i++){
    num_btns[i].addEventListener('click', ()=>{
        display.value += num_btns[i].value
    })
}
