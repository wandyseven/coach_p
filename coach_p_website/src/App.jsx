import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

// import pages
import Layout from './components/template/Layout';
import Home from './pages/Home';
import Coach from './pages/Coach';
import Conseils from './pages/Conseils';
import Programme from './pages/Programme';
import Services from './pages/Services';
import Temoignage from './pages/Temoignage';
import Inscription from './pages/Inscription';
import UserConnexion from './pages/user/UserConnexion';
import CoachConnexion from './pages/coach/CoachConnexion';
import UserDashboard from './pages/user/UserDashboard';
import CoachDashboard from './pages/coach/CoachDashboard';
import NotFound from './pages/NotFound';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/coach' element={<Coach/>} />
        <Route path='/conseils' element={<Conseils/>} />
        <Route path='/programme' element={<Programme/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/temoignage' element={<Temoignage/>} />
        <Route path='/signin' element={<Inscription/>} />

        <Route path='connexion'>
          <Route path='user' element={<UserConnexion/>} />
          <Route path='coach' element={<CoachConnexion/>} />
        </Route>

        <Route path='dashboard'>
          <Route path='user' element={<UserDashboard/>} />
          <Route path='coach' element={<CoachDashboard/>} />
        </Route>

      <Route path="*" element={<NotFound />} />

      </Route>
    

    </Routes>
   </BrowserRouter>
  )
}

export default App
