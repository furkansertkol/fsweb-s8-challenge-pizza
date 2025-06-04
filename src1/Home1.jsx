import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import workintech from '/workintech.svg'
import logo from '/images/iteration-1-images/logo.svg'
import './Home.css'


function Home1() {
  const [count, setCount] = useState(0)

  return (
     <div className="background">
      <img src={logo} className="logo" alt=""/>

      <text className='text'>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</text>

      <button className="button">ACIKTIM</button>

    </div>
  );
};
  

export default Home1
