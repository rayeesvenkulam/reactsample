import { Component } from "react";
import sample8 from "./sample8";
import Sample8 from './sample8';


class sample7 extends Component{

state={
    name:"rayees",
    no:12
}

    render(){
        return(
           <div>
               <h1>state and props example</h1>
               <h2>{this.state.name}</h2>
               <Sample8 name={this.state.name} />
               <Sample8 name={this.state.no} />
           </div>
        );
    }
}

export default sample7


