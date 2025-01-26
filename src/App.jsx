import { useState } from 'react'
import "./index.css"
function App() {
  const [operands,setOperands]=useState({previousOperand:``,currentOperand:``})
  function addDigits(digit){
    setOperands(prevOperand=>({...prevOperand,currentOperand:`${prevOperand.currentOperand}${digit}`}))
  }
  


  console.log(operands)
  return (
    <div className='calculator-grid'>
      <div className='output'>
          <div className='previous-operand'></div>
          <div className='current-operand'>{operands.currentOperand}</div>
      </div> 
      <button className='span-two'>AC</button>
      <button >DEL</button>
      <button>/</button>
      <button onClick={()=>{addDigits("1")}}>1</button>
      <button onClick={()=>{addDigits("2")}}>2</button>
      <button onClick={()=>{addDigits("3")}}>3</button>
      <button>*</button>
      <button onClick={()=>{addDigits("4")}}>4</button>
      <button onClick={()=>{addDigits("5")}}>5</button>
      <button onClick={()=>{addDigits("6")}}>6</button>
      <button>+</button>
      <button onClick={()=>{addDigits("7")}}>7</button>
      <button onClick={()=>{addDigits("8")}}>8</button>
      <button onClick={()=>{addDigits("9")}}>9</button>
      <button>-</button>
      <button>.</button>
      <button onClick={()=>{addDigits("0")}}>0</button>
      <button className='span-two'>=</button>
    </div>
  )
}

export default App
