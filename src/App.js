import { commands } from './utils/commands';
import React,{useState} from 'react';
import './App.css';


const App =() => {

  const [commandsToRun,setCommandsToRun]=useState([]);

  
  const handleChange=(e)=>{
    const value=e.target.value;
    const checked=e.target.checked;
    if(checked){
      setCommandsToRun([
        ...commandsToRun,value
      ])
    }
    else{
        setCommandsToRun(commandsToRun.filter((e) =>(e!==value) ));
    }
    
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(commandsToRun);
  }

  return(
    <div className='commands'>
      
      <h1>Commands</h1>
      <form className="form" onSubmit={handleSubmit}>
        <ul>
        {
          commands.map((c,i)=>{
            return(
                <li>
                  <input key={i} type="checkbox" name={c.name} value={c.value} id={c.id} onChange={handleChange}  />
                  <label>{c.name}</label>
                </li>
            );
          })
        }
      
          
        </ul>
      
       <button type="submit">Submit</button>
      </form>
    
    </div>
  )
}

export default App;