import img1 from './quarn.jpg'
import './Nav.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [mobil , setMobil] = useState(false)

    
  return (
    <nav className='nav' dir='rtl'>
        <div className='nav-container'>
            <div className='logo'>
                <Link to='/'>
                     <img src={img1}/>
                </Link>   
            </div>
            <ul className={mobil ? 'Nav-Link' :  'Nav-Mobil' }>
                <li><Link to='/'>الصفحه الرئيسيه</Link></li>
                <li><Link to='القران الكريم'>القران الكريم</Link></li>
                <li><Link to='احاديث'>احاديث</Link></li>
                <li><Link to='اذكار وتسابيح'>اذكار وتسابيح</Link></li>
            </ul>
            <a onClick={()=>setMobil(!mobil)} className='icon'>
            {
                mobil ? (<i className="fa-solid fa-circle-xmark fa-2x"></i>) : (<i className="fa-solid fa-bars fa-2x"></i>)
            }
            </a>
        </div>
    </nav>
  )
}

export default Nav
