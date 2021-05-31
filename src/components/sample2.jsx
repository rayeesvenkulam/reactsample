import {useState} from 'react';


function Sample2(){

    const [value, setValue] = useState(1);
    const add=()=>{
        setValue(value*5);
       

    }

   return(

     <div>
         <button onClick={add}>
             sample2
         </button>
        <h3>added value is: {value}</h3> 
     </div>

   );


}

export default Sample2;