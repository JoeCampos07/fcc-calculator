import '../stylesheets/button.css'
import { ids } from './sources';

function Button(props) {

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+/-'];
  const operators = ['+', '-', '*', '/'];
  const equal = ['='];
  const reset = ['AC'];
  const height = ['=']
  const width = ['AC', '0']

  const determineClass = (child) => {
    if (numbers.includes(child)){
      return 'number';
    }else if (operators.includes(child)){
      return 'operation';
    }else if (equal.includes(child)){
      return 'equal'
    }else if (reset.includes(child)){
      return 'reset'
    }
  }

  const determineSize = (child) => {
    if (height.includes(child)) {
      return 'height-button'
    } else if (width.includes(child)) {
      return 'long-button'
    }else {
      return 'normal-button'
    }
  }

  return (
    <button className={determineSize(props.children) + ' ' + determineClass(props.children)}
            id={ids[props.children]}
            onClick={() => props.clickHandle(props.children)}>
      {props.children}
    </button>
  )

}

export default Button;