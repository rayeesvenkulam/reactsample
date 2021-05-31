import {useState} from "react";
import Sample6 from './sample6';
import Employee from './employee';

function Sample()
{
  const [name,addName]= useState("rayees");
    const adName=()=>{
       addName(name+"venkulam");
    }

    let emp = [{name:'abcd',age:10},
    {name:'aggggd',age:80},
    {name:'fffd',age:30},
   ]

    return(
        <div >
       <button onClick={adName}>add </button>
       <h1>Sample........props</h1>
     {
       emp.map((obj,index)=>
       (
         <Employee key={index} {...obj} />
       )

         
      )
       }
       </div>
    );
}
export default Sample;