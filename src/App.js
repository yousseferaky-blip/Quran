import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './component/nav/Nav';
import Timing from './component/ahazes/Ahazes';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import Quran from './component/quran/Quran';
import QuranAll from './component/quranAll/QuranAll';
import Azkar from './component/azkar/Azkar';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/احاديث' element={<Timing />}/>
        <Route path='/القران الكريم' element={<Quran />}/>
        <Route path=':ID' element={<QuranAll />}/>
        <Route path='/اذكار وتسابيح' element={<Azkar />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
