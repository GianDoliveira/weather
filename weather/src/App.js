import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { BsFillDropletFill } from 'react-icons/bs'
import { SiWindicss } from 'react-icons/si'


export default function App() {

  const [data, setData] = useState({})
  const [local, setLocal] = useState('')

  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&lang=pt_br&appid=COLOQUE-A-CHAVE-AQUI`;


  const search = (e) => {
    if (e.key === 'Enter') {
      axios.get(urlWeather)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
      setLocal('')
    }
  }
  
  return (
    <div className="app">
      <div className="search">
        <input
          value={local}
          onChange={e => setLocal(e.target.value)}
          onKeyPress={search}
          type="text"
          placeholder='Pesquisar'
        />
      </div>
      {data.name !== undefined && 
      <div className='container'>
        <div className='city'>
          {data.main ? <p>{data.name}, {data.sys.country}</p> : null}
        </div>
        <div className='temperature'>
          {data.main ? <p>{Math.round(data.main.temp)}°C</p> : null}
        </div>
        <div className='weather'>
        {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
        <div className='details'>
          <div className='humidity'>
            <i><BsFillDropletFill /></i>
            <span>{data.main ? <p>{data.main.humidity}% </p> : null}</span>
          </div>
          <div className='wind'>
            <i><SiWindicss /></i>
            <span>{data.wind ? <p>{Math.round(data.wind.speed.toFixed())}Km/h</p> : null}</span>
          </div>
        </div>
      </div>
      }

    </div>
  );
}

