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
const display = document.querySelector('.display')
let num1 = 0
let num2 = 0
let result = 0
let operator = ''
// number button function
const num_btns = document.querySelectorAll('.num')
for(let i = 0; i < num_btns.length;i++){
    num_btns[i].addEventListener('click', ()=>{
        if(display.innerText === '0'){
            display.innerText = num_btns[i].value
        } else {
            display.innerText += num_btns[i].value
        }
        if(operator === ''){
            num1 = parseFloat(display.innerText)
        } else {
            num2 = parseFloat(display.innerText)
        }
    })
}
// clear button function
const clear_btn = document.querySelector('.clear')
clear_btn.addEventListener('click',()=>{
    display.innerText = '0'
})
// delete button function
const delete_btn = document.querySelector('.delete')
delete_btn.addEventListener('click',()=>{
    display.innerText = display.innerText.slice(0,-1)
    if(display.innerText === ''){
        display.innerText = '0'
    }
})
// operator button function
const operator_btns = document.querySelectorAll('.operator')
for(let i = 0; i < operator_btns.length;i++){
    operator_btns[i].addEventListener('click', ()=>{
        operator = operator_btns[i].value
        num1 = parseFloat(display.innerText)
        display.innerText = ''
    })
}
// equal button function
const equal_btn = document.querySelector('.equal')
equal_btn.addEventListener('click',()=>{
    if(num1 !== '' && operator !== '' && display.innerText !== ''){
        num2 = parseFloat(display.innerText)
        result = operate(operator,num1,num2)
        display.innerText = result
    }
})