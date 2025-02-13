import { useState } from 'react';
import { Routes, Route } from 'react-router';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

// import pages
import Layout from './components/template/Layout';
import Home from './pages/Home';
import Coach from './pages/Coach';
import Conseils from './pages/Conseils';
import Programme from './pages/Programme';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/coach' element={<Coach/>} />
      <Route path='/conseils' element={<Conseils/>} />
      <Route path='/programme' element={<Programme/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/temoignage' element={<Temoignage/>} />
      <Route path='/signin' element={<Inscription/>} />
      <Route path='/connexion/user' element={<UserConnexion/>} />
      <Route path='/connexion/coach' element={<CoachConnexion/>} />
      <Route path='/dashboard/user' element={<UserDashboard/>} />
      <Route path='/dashboard/coach' element={<CaochDashboard/>} />

    </Route>
   </Routes>
  )
}

export default App
