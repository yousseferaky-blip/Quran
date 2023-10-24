import React, { useEffect, useState } from 'react'
import './Ahazes.css'

const Timing = () => {
    const [time,setTime] = useState([])
    const [index,setIndex] = useState(301)

    useEffect(()=>{
        fetch('https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300&fbclid=IwAR1olwpjGGm7ClgtABJiiLDF6p3lytZO9LrPxuSvgNLnJAWxvCvfezYRqa0')
        .then(res=>res.json())
        .then(resa=>setTime(resa.items))
    },[])

    useEffect(()=>{
        if( index < 301 ){
            setIndex(600)
        }
        if( index > 600){
            setIndex(301)
        }
    },[time,index])

   
  return (
    <div className='ahazes'>
        <div className='btn'>
        <button onClick={()=>setIndex(x=>x-1)}>السابق</button>
        <button onClick={()=>setIndex(x=>x+1)}>التالي</button>
        </div>
       {
            time.map((time)=>(
                <div className='content' key={time.number}>
                {
                    time.number === index ?<> 
                        <p>{time.arab}</p> 
                    </> :
                    ''
                }
                </div>
                

            )
            )
        }
    </div>
  )
}

export default Timing