// import React, { Component } from 'react';

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     handleAdd(){
    // this.setState({ count: count + 1})
//}

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }

// export default Hooks;

import React, {useState, useEffect} from 'react'
import NameDisplay from './NameDisplay'
const Hooks = () => {
    const [count, setCount] = useState(0)
    if (count < 0){
        setCount(10000)
    }
    if (count > 10000) {
        setCount(0)
    }
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect Invoked')
    }, [])
    useEffect(() => {
        console.log('Count useEffect Invoked')
    }, [count])
    return(
        <div>
            <NameDisplay name = {name}/>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Hooks