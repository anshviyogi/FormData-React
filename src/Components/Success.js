import React from 'react'
import './Success.css'

function Success() {
  // Success Page
  return (
    <div className='success'>
        <h1>Thank You !!</h1>
        <button className='success__addAnother' onClick={()=> window.location.href = '/'}>Add Another</button>
    </div>
  )
}

export default Success