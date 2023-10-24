import React, { useEffect, useState } from 'react'
import './Azkar.css'

const Azkar = () => {

    const [azkar,setAzkar] = useState([])
    useEffect(()=>{
      fetch('https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json')
      .then(res=>res.json())
      .then(data=>setAzkar(data.تسابيح))
    },[])

  return (
    <div className='azkar-content'>
        <h1>تسابيح</h1>
        {
          azkar.map(azkar=>(
            <p className='azkar' key={azkar.content}><span></span>{azkar.content}</p>
          ))
        }
    </div>
  )
}

export default Azkar