import '../stylesheets/calculator.css'
import Button from './button';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { hasConsecutiveOperators, remover} from './sources';


function Calculator () {

  const [count, setCount] = useState ('0')
  const [memory, setMemory] = useState('')

  const addNumber = (value) => {
    if (count == '0') {
      setCount(value)
      setMemory(value)
    }else if(count.includes('+')||count.includes('-')||
             count.includes('*')||count.includes('/')){
      setCount(value)
      setMemory(memory+value)
    }else{
      setCount(count+value)
      setMemory(memory+value)
    }
  }

  const limitReached = () => {
    const oldValue = count.toString();
    setCount('Digit limit')
    setTimeout(() => {
      setCount(oldValue);},
    1500)
    }
  
  const restartCount = () => {
    setCount('0')
    setMemory('')
  }
  
  const handleClick = (value) => {
    if(count.length>28 || count === 'Digit limit'){
      limitReached()
    }else{
      addNumber(value)
    }
  }

  const handlePeriod = (value) => {
    if (count.includes('.')){
    }else{
      if (count.length<29){
        addNumber(value)
        }else{
          limitReached()
        }}
  }

  const addOperation = (value) => {
      setMemory(memory + value)
      setCount(value)
    }
  
  const result = (value) => {
      const multipleOp = hasConsecutiveOperators(memory)
      if (memory && multipleOp == false) {
          if (memory.includes('+') || memory.includes('-') ||
              memory.includes('*') || memory.includes('/')) {
            const opResult = evaluate(memory).toString();
            setCount(opResult);
            setMemory(opResult);
          } else {
            alert("Write an operation first");}
          
        }else{
          const modifiedMemory = remover(memory);
          const opResult = evaluate(modifiedMemory).toString();
          setMemory(opResult)
          setCount(opResult)
        }
      }
  
  return (
    <div className='main-content'>
      <div className='calculator-box'>
        <div className='display'>
          <div className='display-memory' >
            <span className='display-text'>{memory}</span>
          </div>
          <div className='display-active' id='display'>
            <span className='display-text'>{count}</span>
          </div>
        </div>
        <div className='number-pad'>
          <Button clickHandle={restartCount}>AC</Button>
          <Button clickHandle={addOperation}>/</Button>
          <Button clickHandle={addOperation}>*</Button>
          <Button clickHandle={handleClick}>7</Button>
          <Button clickHandle={handleClick}>8</Button>
          <Button clickHandle={handleClick}>9</Button>
          <Button clickHandle={addOperation}>-</Button>
          <Button clickHandle={handleClick}>4</Button>
          <Button clickHandle={handleClick}>5</Button>
          <Button clickHandle={handleClick}>6</Button>
          <Button clickHandle={addOperation}>+</Button>
          <Button clickHandle={handleClick}>1</Button>
          <Button clickHandle={handleClick}>2</Button>
          <Button clickHandle={handleClick}>3</Button>
          <Button clickHandle={result}>=</Button>
          <Button clickHandle={handleClick}>0</Button>
          <Button clickHandle={handlePeriod}>.</Button>
        </div>
      
      </div>


    </div>
    
  )
}

export default Calculator;


/* 
const addOperation = (value) => {
    if(memory.includes('+')||memory.includes('-')||
       memory.includes('*')||memory.includes('/')){
    }else{
      setMemory(memory + value)
      setCount(value)
    }
  } 

  const result = (value) => {
    if (memory && memory.includes('+')||memory.includes('-')||
                  memory.includes('*')||memory.includes('/')) {
      const opResult = evaluate(memory).toString();
      setCount(opResult);
      setMemory(opResult)
    }else{
      alert("Write an operation first");
    }
  }

  const [count, setCount] = useState ('0')

  const [memory, setMemory] = useState('')

  const addNumber = (value) => {
    if (count == '0') {
      setCount(value)
      setMemory(value)
    }else if(count.includes('+')||count.includes('-')||
             count.includes('*')||count.includes('/')){
      setCount(value)
      setMemory(memory+value)
    }else{
      setCount(count+value)
      setMemory(memory+value)
    }
  }

  const limitReached = () => {
    const oldValue = count.toString();
    setCount('Digit limit')
    setTimeout(() => {
      setCount(oldValue);},
    1500)
    }
  
  const restartCount = () => {
    setCount('0')
    setMemory('')
  }
  
  const handleClick = (value) => {
    if(count.length>28 || count === 'Digit limit'){
      limitReached()
    }else{
      addNumber(value)
    }
  }

  const handlePeriod = (value) => {
    if (count.includes('.')){
    }else{
      if (count.length<29){
        addNumber(value)
        }else{
          limitReached()
        }}
  }

  const addOperation = (value) => {
      setMemory(memory + value)
      setCount(value)
    }
  
  const result = (value) => {
      if (memory) {
        const operators = ['+', '-', '*', '/'];
        const countOperators = memory.split("").filter(char => operators.includes(char)).length;
        if (countOperators === 1) {
          if (memory.includes('+') || memory.includes('-') ||
              memory.includes('*') || memory.includes('/')) {
            const opResult = evaluate(memory).toString();
            setCount(opResult);
            setMemory(opResult);
          } else {
            alert("Write an operation first");
          }
        } else {
          const modifiedMemory = remover(memory);
          const opResult = evaluate(modifiedMemory).toString();
          setMemory(opResult)
          setCount(opResult)
        }
      }
    }

  */