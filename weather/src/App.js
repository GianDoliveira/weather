import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [local, setLocal] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&lang=pt_br&appid=b02166061d90cfd41cfa2444a6be2809`

  const search =(event)=>{
    if (event.key === 'Enter') {
      axios.get(url)
      .then((response)=> {
        setData(response.data)
      })
      setLocal('')
    }
  }

  return (
      <div>
        
      </div>
  );
}

export default App;
