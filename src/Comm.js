import React, { Component } from "react";
class Comm extends Component{
 render(){
    return(
        <div className="mx-auto flex bg-gray-100">
      
      <h1>Commands</h1>
      <div>
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
       <button className="box-border hover:box-content pd-20 mb-10 bg-blue-500 mx-auto" type="submit" >Submit</button>
      </form>
    </div>
    </div>
   
    );
 }
}

export default Comm;
