import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web from './web';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AboutPage from './aboutPage';

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Web/>}  />
        <Route path='/aboutcompany' element={<AboutPage/>}  />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
