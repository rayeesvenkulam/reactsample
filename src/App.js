

import { useState} from 'react';

import Counter from './components/Counter';

function App() {

const [state,setState]=useState(false)
 

  return (
    <div className="App">
      
    <h1 onClick={()=>setState(!state)}>show</h1>
    {state && <Counter/>}
     
    </div>


  );
}

export default App;
