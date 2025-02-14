import React from 'react';
import './home.scss'


const Home = () => {
  return (
    <div className="container ">
      <div className="row  gap-3">
        <div className=" rounded bloc-t">Column 7 </div>
        <div className=" rounded bloc-t">Column 4</div>
        <div className=" rounded bloc-b">Column 7 </div>
        <div className=" rounded bloc-b">Column 4</div>
       
      </div>
    </div>
  )
}

export default Home