import React from 'react'

const Button = ({ content , func , styled}) => {
  console.log(content);
  console.log(styled);
  
  return (
    <button onClick={func} type='button' className={` ${styled ? 'button' : ' font-bold text-white uppercase ' }   cursor-pointer`}> 
    {/* { content && styled ? content : `button`} */}
    { !content && styled && 'button'}
    { content && styled && content}
    {!styled && !content && 'button'}
    {!styled && content && 'style  removed'}
    </button>
  )
}

export default Button