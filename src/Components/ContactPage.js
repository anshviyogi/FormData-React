import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { userId } from '../Redux/action'
import './ContactPage.css'

function ContactPage() {
const dispatch = useDispatch()
const navigate = useNavigate()
const reduxData = useSelector(data => data)
const[email,setEmail] = useState('')
const[phoneNumber,setPhoneNumber] = useState('')

    function submitHandler(e){
        e.preventDefault()

        const obj = {
            visitor_id:reduxData.visitorReducer.visitorId,
            first_name:reduxData.personalReducer.browser.firstName,
            last_name:reduxData.personalReducer.browser.lastName,
            telephone:phoneNumber,
            email:email,
            dob:reduxData.personalReducer.browser.birthYear + '-' + reduxData.personalReducer.browser.birthMonth + '-' + reduxData.personalReducer.browser.birthDate 
        }

        if(email === '' || phoneNumber === ''){
            alert('Please fill all the fields')
        }else{
            const objData = {
                email:email,
                telephone:phoneNumber
            }

            // Email and Phone Number validation
            // @ERROR - IP Address is required (NOT MENTIONED IN THE EXCEL SHEET)
            fetch('https://dev.api.klaim.yousted.org/api/visitor/store',{
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":"Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"},
                body:JSON.stringify(objData)
            }).then(res => res.json())
            .then(result => console.log(result))

            // Saving Contact and Personal Page data
            // @ Success
            fetch('https://dev.api.klaim.yousted.org/api/user/store',{
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":"Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"},
                body:JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                dispatch(userId(result.data.userId))
            })

            navigate('/previous')
        }
    }

  return (
    <div className='ContactPage'>

        <form onSubmit={submitHandler}>
        <h1 className='ContactPage__title'>Enter your Contact Details</h1>

        <label>Email Address</label>
        <br/>
        <input className='inputField' placeholder='Email Address' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
<br/>
<br/>
        <label>Phone Number</label>
        <br/>
        <input className='inputField' placeholder='Phone Number' type='tel' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>

        <div className='ContactPage__buttonDiv'>
            <button className='ContactPage__button' to='/success'>Submit</button>
        </div>
        </form>

    </div>
  )
}

export default ContactPage