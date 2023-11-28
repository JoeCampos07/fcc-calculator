
import './App.css'
import Calculator from './components/calculator'

function App() {

  return (
    <div className='main'>
      <div className='app-title'>React Calculator</div>
      <Calculator />
      <div className='signature'>
        <span>Designed and Coded by </span>
        <span className='signature-name'>JoeMint</span></div>
    </div>
  )
}

export default App
