// class Calculator{
//     constructor(preOpTextElement, curOpTextElement){
//         this.preOpTextElement =preOpTextElement
//         this.curOpTextElement= curOpTextElement
//         this.clear()
//     }

//     clear(){
//         this.curOp= ''
//         this.preOp=''
//         this.operator= undefined
//     }

//     delete(){
//         this.curOp= this.curOp.toString().slice(0,-1)
//     }

//     appendNum(num)
//     {
//         if(num=== '.' && this.curOp.includes('.')) return
//         this.curOp= this.curOp.toString() + num.toString()
//     }

//     chooseOperator(operator){
//         if(this.curOp==='') return
//         if(this.preOp !== ''){
//             this.compute()
//         }
//         this.operator= operator
//         this.preOp= this.curOp
//         this.curOp='.'
//     }

//     compute(){
//         let computation
//         const prev= parseFloat(this.preOp)
//         const current= parseFloat(this.curOp)
//         if(isNaN(prev)|| isNaN(current)) return
//         switch(this.operator){
//             case '+':
//                 computation= prev+current
//                 break
//             case '-':
//                 computation= prev-current
//                 break
//             case '*':
//                 computation= prev*current
//                 break
//             case '÷':
//                 computation= prev/current
//                 break
//             default:
//                 return
//         }
//         this.curOp = computation
//         this.operator= undefined
//         this.preOp=''

//     }

//     getDisplayNum(num){
//         const stringNum = num.toString()
//         const integerDigits= parseFloat(stringNum.split('.')[0])
//         const decimalDigits= stringNum.split('.')[1]
//         let integerDisplay 
//         if(isNaN(integerDigits)){
//             integerDisplay=''
//         } else {
//             integerDisplay= integerDigits.toLocaleString('en', {maximumFractionDigits: 0 })
//         }
//         if(decimalDigits != null){
//             return `${integerDisplay}.${decimalDigits}`
//         } else{
//             return integerDisplay
//         }
//     }

//     updateDisplay(){ 
//         this.curOpTextElement.innerText = 
//         this.getDisplayNum(this.curOp)
//         if(this.operator != null){
//             this.preOpTextElement.innerText = 
//             `${this.getDisplayNum(this.preOp)} ${this.operator}`
//         }
//         else{
//             this.preOpTextElement.innerText =''
//         }

//     }

// }


// const numButton = document.getElementsByClassName("num")
// const opButton= document.getElementsByClassName("operator")
// const equalButton = document.getElementsByClassName("equal")
// const delButton = document.getElementsByClassName("del")
// const clearButton = document.getElementsByClassName("clear")
// const preOpTextElement = document.getElementsByClassName("pre-op")
// const curOpTextElement = document.getElementsByClassName("cur-op")

// const calculator= new Calculator(preOpTextElement, curOpTextElement)

// numButton.forEach(button => {
//     button.addEventListener('click', () =>{
//         calculator.appendNum(button.innerText)
//         calculator.updateDisplay()
//     })
// })
// opButton.forEach(button => {
//     button.addEventListener('click', () =>{
//         calculator.chooseOperator(button.innerText)
//         calculator.updateDisplay()
//     })
// })
// equalButton.addEventListener('click', button =>{
//     calculator.compute()
//     calculator.updateDisplay()
// })
// clearButton.addEventListener('click', button =>{
//     calculator.clear()
//     calculator.updateDisplay()
// })
// delButton.addEventListener('click', button =>{
//     calculator.del()
//     calculator.updateDisplay()
// })

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })