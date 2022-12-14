import { commands } from './utils/commands';
import React,{useState} from 'react';
import './App.css';
import SetUp from './SetUp';
const App =() => {

  const [commandsToRun,setCommandsToRun]=useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isChecked1, setIsChecked1] = React.useState(false);

  const handleChange=(e)=>{
    const value=e.target.value;
    const checked=e.target.checked;
    if(checked){
      setCommandsToRun([
        ...commandsToRun,value
      ])
      if(value ==="dbimport.pl"){
          setIsChecked(!isChecked);
      }
      if(value ==="PullCodeFromRepo"){
        setIsChecked1(!isChecked1);
    }
    }
    else{
        setCommandsToRun(commandsToRun.filter((e) =>(e!==value) ));
        if(value ==="dbimport.pl"){
          setIsChecked(!isChecked);
      }
      if(value ==="PullCodeFromRepo"){
        setIsChecked1(!isChecked1);
    }
    }
    
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(commandsToRun);
  }

  return(
    <div className='container px-5 mx-auto'>
    <div>
    <div className="bg-white-800 text-blue ml-10">
    <a href='https://www.modeln.com'><img
            className="object-cover object-center rounded"
            alt="Model N "
            src="./mni.png"
          /></a>
          
    </div>
    <header className="text-gray-400 bg-gray-900 body-font">
       <div>
      <SetUp/>
      </div>
    </header>
    <div className="mx-auto flex bg-gray-100">
      
      <div className='mx-auto justify-center'>
      <h1 className='text-2xl font-bold'>Commands</h1><br/>
      
      <form className="form" onSubmit={handleSubmit}>
        <p className='text-l italic'> <u>These Commands will help in Dev Env Setup</u></p>
        <ul>
        {
          commands.map((c,i)=>{
            return(
                <li>
                  <input key={i} type="checkbox" name={c.name} value={c.value} id={c.id} onChange={handleChange} />
                  <label >{c.name} -- {c.desc}</label>
                  {isChecked && c.id===2&& <p> Please mention the correct path of dmp zip file</p>}
                  {isChecked && c.id===2 && <input type = "text" name="path" placeholder='Enter the path of zip file' id="b"/>}
                  {isChecked && c.id===2&& <p> Please mention the dbusername which is to be created </p>}
                  {isChecked && c.id===2 && <input type = "text" name="path" placeholder='Enter the name of dbuser' id="dbuser"/>}
                  {isChecked1 && c.id===1 && <p> Please mention the remote branch name of ModelN:modeln57 git repo</p>}
                  {isChecked1 && c.id===1 && <input type = "text" name="path" placeholder='Enter the remote branch ' id="br1"/>}
                  {isChecked1 && c.id===1 && <p> Please mention the local branch name of ModelN:modeln57 </p>}
                  {isChecked1 && c.id===1 && <input type = "text" name="path" placeholder='Enter the local branch ' id="br2"/>}
                  
                </li>

            );
          }
          )
          
        }
  
        </ul>

       <button className=" justify-center ml-20 mt-5 mb-10 border-solid border-2 border-sky-500 bg-blue-500" type="submit" ><p className='px-3 py-2 text-white'><b>Submit</b></p></button>
      </form>
    </div>
    </div>
   

</div>
 <div>
 <footer className="mx-auto text-center bg-blue-300">
       <h4>Created by Triwizards Team - Model N Novation</h4>
        <h2> For any Issues or queries Please mail to :</h2> <p><a href='mailto:vbuddarapu@modeln.com'> Model N Helpcenter</a></p>
    </footer></div>
    </div>
  )
}

export default App;