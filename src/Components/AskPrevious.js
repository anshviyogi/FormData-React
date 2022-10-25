import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AskPrevious.css'

function AskPrevious() {
    const navigate = useNavigate()
  return (
    <div className='askPrevious'>
        <h1>Do you have a Previous Address?</h1>
        <br/>
        <button className='previousButtons' onClick={()=> navigate('/previousAddress')}>Yes</button>
        <br/>
        <button className='previousButtons' onClick={()=> window.location.href = '/success'}>No</button>
    </div>
  )
}

export default AskPrevious