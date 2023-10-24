import { useEffect, useState } from 'react'
import   './Home.css'

const Home = () => {
    const [Fajr,seFajr ] = useState([])
    const [Dhuhr,setDhuhr] = useState([])
    const [Asr,setAsr ]= useState([])
    const [Maghrib,setMaghrib] = useState([])
    const [Isha,setIsha] = useState([])

    async function Timing (){
      const request = await  fetch('https://api.aladhan.com/v1/timingsByCity/19-08-2023?city=cairo&country=egypt&method=8&fbclid=IwAR1Y9TDWVdTu2A3F5LGgjjNjn2Z2eWstncos0X1n7BVv0IKBPxxVlVFX_CQ')
      const res = await request.json()

      seFajr(res.data.timings.Fajr)
      setDhuhr(res.data.timings.Dhuhr)
      setAsr(res.data.timings.Asr)
      setMaghrib(res.data.timings.Maghrib)
      setIsha(res.data.timings.Isha)

    }

  useEffect(()=>{
    Timing()
  },[])

  return (
    <>
      <div className='home'>
          <h1>رتل قرانك</h1>
      </div>
    <div className='timiming-content'>
      <h2>مواقيت الصلاه</h2>
      <div className='timiming'>
        <h3><span>الفجر</span>{Fajr}</h3>
        <h3><span>الظهر</span>{Dhuhr}</h3>
        <h3><span>العصر</span>{Asr}</h3>
        <h3><span>المغرب</span>{Maghrib}</h3>
        <h3><span>العشاء</span>{Isha}</h3>
      </div>
    </div>  
    </>
  )
}

export default Home