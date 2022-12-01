import { useState } from 'react';
import './App.css';
import {BsFillDropletFill} from 'react-icons/bs'
import {SiWindicss} from 'react-icons/si'


export default function App() {

  const [data, setData] = useState({})
  const [local, setLocal] = useState('')

  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&lang=pt_br&appid=b02166061d90cfd41cfa2444a6be2809`;


  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(urlWeather)
      .then((res) => res.json())
      .then((result) =>{
        setLocal(result)
        setData('')
        console.log(result)
      })  
    }
  }
  return (
    <div className='app'>
      <div className="search">
        <input
          value={local}
          onChange={e => setLocal(e.target.value)}
          onKeyPress={search}
          type="text"
          placeholder='Pesquisar'
        />
      </div>

      <div className='container'>
        <div className='city'>
          {data.name}
        </div>
        <div className='temperature'>
          15°C
        </div>
        <div className='weather'>Clounds</div>
        <div className='details'>
          <p className='humidity'>
            <i><BsFillDropletFill/></i>
            <span>90%</span>
          </p>
          <p className='wind'>
            <i><SiWindicss/></i>
            <span>9km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}

