import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './QuranAll.css'

const QuranAll = () => {
    const [ quranAll , setQuranAll ] = useState([])
    const [surah, setSurah] = useState([]);
    const params = useParams()
   
      useEffect(function() {
        async function getAyat() {
            const request = await fetch(`https://api.alquran.cloud/v1/surah/${params.ID}`);
            const response = await request.json();
            setQuranAll(response.data.ayahs);
            setSurah(response.data);
        }
        getAyat();
    }, [params]);
    
  return (
    <div className='quranAll-Container'>
      <div>
          <h1>{surah.name}</h1> 
          <h1>({surah.numberOfAyahs}):<span>عدد الايات</span></h1>
      </div>
        <span>
          {
            quranAll.map(quranAl=>(
            <div className='quranAll'>
              <p>{quranAl.text}</p> <h2> ﴾{quranAl.numberInSurah}﴿</h2>
            </div>  
            ))
          }
        </span>
    </div>
  )
}

export default QuranAll