import React from 'react'

const Button = ({ content , func , styled}) => {
  return (
    <button onClick={func} type='button' className={` ${styled ? 'button' : ' font-bold text-white uppercase ' }   cursor-pointer`}> {content ? content : 'button'}</button>
  )
}

export default Button