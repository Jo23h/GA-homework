const buttons = document.querySelectorAll('.button')

let firstNumber = ''
let operator = ''
let secondNumber = ''


buttons.forEach (button => {
    button.addEventListener('click', (event) => {
        const buttonClicked = event.target;
        const buttonValue = buttonClicked.textContent

        if (buttonValue === 'C') {
            firstNumber = ''
            operator = ''
            secondNumber = ''
            console.log('cleared')
        } 
        
        if (buttonValue === '='){
             console.log('Equals pressed')
            if (firstNumber && operator && secondNumber){
                let num1 = Number(firstNumber)
                let num2 = Number(secondNumber)
                let result

                if (operator === '+'){
                    result = num1 + num2
                } else if (operator === '-'){
                    result = num1 - num2
                } else if (operator === '/'){
                    result = num1/num2
                } else if (operator === '*'){
                    result = num1*num2
                }
                console.log('Result:', result)
            }
        } 

        if(buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/'){
            operator = buttonValue
            console.log('pressed',operator)
        }
         
    })
})




