import React, { useEffect, useState } from 'react'
import './Quran.css'
import { Link } from 'react-router-dom'

const Quran = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://api.alquran.cloud/v1/surah')
        .then(res=>res.json())
        .then(DATA=>setData(DATA.data))
    },[])

    
  return (
    <div className='qyran-Container'>
       {
        data.map(date=>(
            <div key={Math.random()}>
                <Link to={`/${date.number}`}>
                        <button className='quran' >{date.name}</button>
                </Link> 
            </div>
        ))
       }
    </div>
  )
}

export default Quran