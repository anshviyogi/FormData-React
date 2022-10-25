import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PersonalPage from './Components/PersonalPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './Components/ContactPage';
import { detect } from 'detect-browser';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { visitorId } from './Redux/action';
import AskPrevious from './Components/AskPrevious';
import Success from './Components/Success';
import PreviousAddress from './Components/PreviousAddress';

function App() {
  const dispatch = useDispatch()
  const browser = detect()

  // Device information
  // @ Success
  
    useEffect(async()=>{
      // Browser
      const browserName = browser.name
      const deviceType = browser.type
      const userAgent = window.navigator.userAgent
      const res = await axios.get('https://geolocation-db.com/json/')
      // console.log(res.data);
      const obj = {
        ip_address:res.data.IPv4,
        device_type:deviceType,
        browser_type:browserName,
        user_agent:userAgent
      }

      fetch('https://dev.api.klaim.yousted.org/api/visitor/store',{
        method:"POST",
        headers:{'Content-Type':"application/json","Authorization":"Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(result =>{
        console.log(result)
        dispatch(visitorId(result.data.visitorId))
      })
    },[])

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<PersonalPage/>}/>
        <Route exact path='/contact' element={<ContactPage/>}/>
        <Route exact path='/previous' element={<AskPrevious/>}/>
        <Route exact path='/previousAddress' element={<PreviousAddress/>}/>
        <Route exact path='/success' element={<Success/>}/>
      </Routes>
    </Router>
  )
}

export default App