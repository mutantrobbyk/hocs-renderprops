// import React, { Component } from 'react';

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0,
//             name: ''
//         }
//     }

//     handleAdd(){
    // this.setState({ count: count + 1})
//}

//     handleInput(value){
//      this.setState({name: e.target.value})
//}

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//                  <input onChange={(e) => this.handleInput(e.target.value)}
//             </div>
//         )
//     }
// }

// export default Hooks;

import React, {useState, useEffect} from 'react';
import NameDisplay from './NameDisplay';

const Hooks = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect Invoked')
    }, [])

    useEffect(() => {
        console.log('Count useEffect Invoked')
    }, [count])

    // const handleAdd = () => {
    //     setCount(count + 1)
    // }

    return(
        <div>
            <NameDisplay name={name}/>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Hooks;