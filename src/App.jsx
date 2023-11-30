import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'

function App() {
// here to reflect/propogate the counter in ui we have used usestate we dont need let counter any more
// setCounter can be any name its just a method which controls the counter
 // usestate(0) 0 is the default value we can any default value or name etc
const [counter, setCounter] = useState(0)

//let counter = 15
  const addValue = ()=>{
    if(counter < 20){
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      return counter;
    }
//counter = counter+1
//here if we write the same it will not increase by 5 it will increase one by one
// To update this we need to use prevCounte => prevCounte + 1 or else counter => counter +1 like above it was done
// setCounter(counter + 1 )
// setCounter(counter + 1 )
// setCounter(counter + 1 )
// setCounter(counter + 1 )
// setCounter(counter + 1 )
// console.log(counter)


  }
  // we can use the same setcounter value in this function as it is global
  const deleteValue =()=>{
    if(counter >= 1){
      setCounter(Counter => Counter - 1 ); return counter;
    }
  }; 

  return (
    <>
     <h1>counter </h1>
     <h2>Counter value:{counter}</h2>
     <button 
     onClick={addValue}
     >Add Value {counter}</button>
      <button
      onClick={deleteValue}
      >delete Value</button>
    </>
  );
}

export default App;
