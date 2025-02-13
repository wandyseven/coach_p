import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.scss';
import '.styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/template/Layout';


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
      <Route path='/services' element={<Services/>} />

    </Route>
   </Routes>
  )
}

export default App
