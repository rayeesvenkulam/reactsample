import {useState} from 'react';
import React, { Component } from 'react';

function Sample3(props){

const [value, setvalue] = useState("rayees");
const  add =() =>{

    setvalue(value+"cp");
}



    return(
       <div>
           <h1>...........................</h1>
           <h2>Sample 3</h2>
           <button onClick={add}>Click</button>
           <p>new value::: {value}</p>
          
       </div>
    );
}


export default Sample3;