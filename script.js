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
let isoperatorpressed = false
// number button function
const num_btns = document.querySelectorAll('.num')
for(let i = 0; i < num_btns.length;i++){
    num_btns[i].addEventListener('click', ()=>{
        if(isoperatorpressed){
            display.innerText = ''
        }
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
        isoperatorpressed = false
    })
}

const dot_btn = document.querySelector('.dot')
dot_btn.addEventListener('click', ()=>{
    if(display.innerText.includes('.')){
        return
    }
    if(isoperatorpressed){
        display.innerText = ''
    }
    if(display.innerText === '0'){
        display.innerText = dot_btn.value
    } else {
        display.innerText += dot_btn.value
    }
    if(operator === ''){
        num1 = parseFloat(display.innerText)
    } else {
        num2 = parseFloat(display.innerText)
    }
    isoperatorpressed = false
})
// clear button function
const clear_btn = document.querySelector('.clear')
clear_btn.addEventListener('click',()=>{
    display.innerText = '0'
    operator = ''
    num1 = 0
    num2 = 0
    result = 0
    isoperatorpressed = false
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
        if(display.innerText !== '' && operator !== '' && !isoperatorpressed){
            calculate()
        } else {
            num1 = parseFloat(display.innerText)
        }
        operator = operator_btns[i].value
        isoperatorpressed = true
    })
}


// equal button function
const equal_btn = document.querySelector('.equal')
equal_btn.addEventListener('click',()=>{
    if(num1 !== '' && operator !== '' && display.innerText !== ''){
        calculate()
    }
})

function calculate(){
    // num2 = parseFloat(display.innerText)
    result = operate(operator,num1,num2)
    display.innerText = result
    num1 = result
    operator = ''
    num2 = 0
}