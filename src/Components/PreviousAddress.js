import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  {useSelector} from 'react-redux'
import './PreviousAddress.css'

function PreviousAddress() {
    const reduxData = useSelector(data => data)
    console.log(reduxData)

    const[address2,setAddress2] = useState(false)
    const[address3,setAddress3] = useState(false)

    const[ad1Line1,setAd1Line1] = useState('')
    const[ad1Line2,setAd1Line2] = useState('')
    const[ad1Line3,setAd1Line3] = useState('')

    const[ad2Line1,setAd2Line1] = useState('')
    const[ad2Line2,setAd2Line2] = useState('')
    const[ad2Line3,setAd2Line3] = useState('')

    const[ad3Line1,setAd3Line1] = useState('')
    const[ad3Line2,setAd3Line2] = useState('')
    const[ad3Line3,setAd3Line3] = useState('')

    // Adding address handler
    function addAnotherHandler(){
        if(!address2){
            setAddress2(true)
        }else{
            setAddress3(true)
        }
    }

    // Address Remove Handler
    function removeHandler(){
        if(address3){
            setAddress3(false)
        }else{
            setAddress2(false)
        }
    }

    // @ Saving Address in API
    function submitHandler(e){
        e.preventDefault()
        console.log(reduxData.userIdReducer.userId)

        const obj = {
            user_id:reduxData.userIdReducer.userId,
            previousAddress:[
                {
                    "prev_address_line1":ad1Line1,
                    "prev_address_line2":ad1Line2,
                    "prev_address_line3":ad1Line3
                },
                {
                    "prev_address_line1":ad2Line1,
                    "prev_address_line2":ad2Line2,
                    "prev_address_line3":ad2Line3
                },
                {
                    "prev_address_line1":ad3Line1,
                    "prev_address_line2":ad3Line2,
                    "prev_address_line3":ad3Line3
                }
            ]
        }

        console.log(JSON.stringify(obj))

        fetch('https://dev.api.klaim.yousted.org/api/pre-user/store',{
                method:"POST",
                headers:{"Content-Type":"application/json","Authorization":"Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"},
                body:JSON.stringify(obj)
            })
        .then(res => res.json())
        .then(result => console.log(result))
    }

  return (
    <div className='previousAddress'>

        <form onSubmit={submitHandler}>
        <h1 style={{textAlign:"center"}}>Previous Address</h1>

{/* First Address Line */}
        <div className='addressBlock'>
        <label className='prvAdressLabel'>Previous Address 1</label>
        <br/>
        <input className='prvAddressInput' placeholder='Address Line 1' value={ad1Line1} onChange={e => setAd1Line1(e.target.value)}/>

        <br/>
        <input className='prvAddressInput' placeholder='Address Line 2' value={ad1Line2} onChange={e => setAd1Line2(e.target.value)}/>

        <br/>
        <input className='prvAddressInput' placeholder='Address Line 3' value={ad1Line3} onChange={e => setAd1Line3(e.target.value)}/>
        </div>

{
    address2 && <div className='addressBlock'>
        {/* Second Address Line */}
        <label className='prvAdressLabel'>Previous Address 2</label>
        <br/>
        <input className='prvAddressInput' placeholder='Address Line 1' value={ad2Line1} onChange={e => setAd2Line1(e.target.value)}/>

        <br/>
        <input className='prvAddressInput' placeholder='Address Line 2' value={ad2Line2} onChange={e => setAd2Line2(e.target.value)}/>

        <br/>
        <input className='prvAddressInput' placeholder='Address Line 3' value={ad2Line3} onChange={e => setAd2Line3(e.target.value)}/>
        </div>
}

{
    address3 && <div className='addressBlock'>
        {/* Third Address Line */}
        
        <label className='prvAdressLabel'>Previous Address 3</label>
        <br/>
        <input className='prvAddressInput' placeholder='Address Line 1' value={ad3Line1} onChange={e => setAd3Line1(e.target.value)}/>

        <br/>
        <input className='prvAddressInput' placeholder='Address Line 2' value={ad3Line2} onChange={e => setAd3Line2(e.target.value)}/>

        <br/>
        <input className='prvAddressInput' placeholder='Address Line 3' value={ad3Line3} onChange={e => setAd3Line3(e.target.value)}/>
        </div>
}

        <div className='prvAddressButtonDiv'>
            <button className='prvAddressButton'>Submit</button>
        </div>

        <div style={{textAlign:"center",marginTop:"15px"}}>
        <Link onClick={addAnotherHandler}>Add Another Address</Link>
        <br/>
        <Link onClick={removeHandler}>Remove Address</Link>
        </div>

        </form>
    </div>
  )
}

export default PreviousAddress