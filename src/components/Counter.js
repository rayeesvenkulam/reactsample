import React,{useState,useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('mounting...');
        return ()=>{
            console.log('unpdating'+count);
        }
        
    },[count])

    

    return (
        <div>
            <button onClick={ ()=>setCount(count+1)}> increment:</button>
            <h1>iam component {count}</h1>
        </div>
    )
}

export default Counter
