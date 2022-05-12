
import './App.css';
import Todo from './Todo.jsx';
import './Todo.css'
import {useState} from 'react';

function App() {

  var value=[{value:'alexis',id:'0',color:'#FFFFFF',completado:'none',active:'linear-gradient(to bottom right,rgba(0, 50, 0, 0), rgba(0, 0, 0, 0))'}]
  var valuesss=[]
  const [values,setValues]=useState([])
  const [valuesarray,setValuesarray]=useState(values);
  return (
    <div className="App">
      <div className="AppContainer">{





          <Todo key={value.lenght} valuesss={valuesss} values={values} value={value} setValues={setValues} valuesarray={valuesarray} setValuesarray={setValuesarray}/>
      



      }


      </div>
        
    </div>
  );
}

export default App;
