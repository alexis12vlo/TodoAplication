
import './App.css';
import Todo from './Todo.jsx';
import './Todo.css'
import noche from './bg-desktop-dark.jpg'
import dia from './bg-desktop-light.jpg'

import {useState} from 'react';

function App() {

  var value=[{value:'',id:'0',color:'#FFFFFF',completado:'none',active:'linear-gradient(to bottom right,rgba(0, 50, 0, 0), rgba(0, 0, 0, 0))'}]
  var valuesss=[]
  const [values,setValues]=useState([])
  const [valuesarray,setValuesarray]=useState(values);
  const [mododia,setMododia]=useState({image:noche,colorletra:'#FFFFF',logo:'none',logo2:'flex',color:'hsl(235, 21%, 11%)',color2:'hsl(235, 24%, 19%)'})
  return (
    <div className="App">
      <div style={{backgroundColor:mododia.color,backgroundImage:`url(${mododia.image})`}} className="AppContainer">{





          <Todo  mododia={mododia} setMododia={setMododia} key={value.lenght} valuesss={valuesss} values={values} value={value} setValues={setValues} valuesarray={valuesarray} setValuesarray={setValuesarray}/>
      



      }


      </div>
        
    </div>
  );
}

export default App;
