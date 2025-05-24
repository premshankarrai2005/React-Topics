import  { useRef } from 'react';

export default function UseRef1() {
    const inputRef =useRef()
    
    const ChangeColBor=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="#82E0AA"
        inputRef.current.style.color = "#000";
        
    }
    
    return (
        <div className='container'>
            <input ref={inputRef} type="text" placeholder="Enter your text" />
            <button onClick={ChangeColBor}>Click Me</button>
        </div>
    );
}
