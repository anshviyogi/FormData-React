import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './PersonalPage.css'
import { personalData } from '../Redux/action'

function PersonalPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // State Management
    const[fname,setFname] = useState('')
    const[lname,setLname] = useState('')
    const[bday,setBday] = useState('')
    const[bmonth,setBmonth] = useState('')
    const[byear,setByear] = useState('')

    // Saving PersonalPage data into redux store
    function personalDataHandler(e){
        const data = {
            firstName:fname,
            lastName:lname,
            birthDate:bday,
            birthMonth:bmonth,
            birthYear:byear
        }

        e.preventDefault()
        if(fname === '' || lname === '' || bday === '' || bday === 'Day' || bday === 'And so on..' || bmonth === '' || bmonth === 'Day' || bmonth === 'And so on..' || byear === '' || byear === 'Day' || byear === 'And so on..'){
            alert('Please fill all the fields to continue !!')
        }else{
            navigate('/contact')
            dispatch(personalData(data))
        }    
    }


  return (
    <div className='personalPage'>

        <form>
        <h1 className='personalPage__title'>Enter your Personal Details</h1>

        <label>First Name</label>
        <br/>
        <input className='inputField' placeholder='First Name' value={fname} onChange={e => setFname(e.target.value)}/>
<br/>
<br/>
        <label>Last Name</label>
        <br/>
        <input className='inputField' placeholder='Last Name' value={lname} onChange={e => setLname(e.target.value)}/>

        <br/>
        <br/>

        <label>Enter your Date of Birth</label>
        <div className='row'>
            <div className='col-sm-3'>
            <select className='select' onChange={e => setBday(e.target.value)}>
                    <option>Day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>And so on..</option>
            </select>
            </div>
            <div className='col-sm-3'>
            <select className='select' onChange={e => setBmonth(e.target.value)}>
                    <option>Month</option>
                    <option>January</option>
                    <option>Febuary</option>
                    <option>March</option>
                    <option>April</option>
                    <option>And so on..</option>
            </select>
            </div>
            <div className='col-sm-3'>
            <select className='select' onChange={e => setByear(e.target.value)}>
                    <option>Year</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>And so on...</option>
            </select>
            </div>
        </div>

        <div className='personalPage__buttonDiv'>
            <button className='personalPage__button' onClick={personalDataHandler}>Next</button>
        </div>
        </form>

    </div>
  )
}

export default PersonalPage