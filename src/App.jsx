import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [btnNumber , setBtnNumber] = useState("");

  
  // button one
  const handlebtnone = ()=>{
    setBtnNumber('one');
  }

  // button two
  const handlebtntwo = ()=>{
    setBtnNumber('two');
  }


  // button three
  const handlebtnthree = ()=>{
    setBtnNumber('three');
  }
  // button four
  const handlebtnfour = ()=>{
    setBtnNumber('four');
  }


  return (
    <div className='flex w-full h-screen justify-center items-center gap-5 bg-[#26272b]  '>
      <Button styled={true} content={btnNumber == 'one' && "button one clicked"} func={handlebtnone}  />
      <Button styled={true} content={btnNumber == 'two' && "button two clicked"} func={handlebtntwo} />
      <Button  content={btnNumber == 'three' && "button three clicked"} func={handlebtnthree}/>
      <Button styled={true} content={btnNumber == 'four' && "button four clicked"} func={handlebtnfour}/>
    </div>
  )
}

export default App
