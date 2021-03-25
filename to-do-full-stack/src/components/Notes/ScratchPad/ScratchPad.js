import React,{useState} from 'react'
import "./ScratchPad.css"
function ScratchPad() {
    const [data,setdata] = useState("")
    const changeHandler = (e) => {
        setdata(e.target.val)
    }
    return (
        <div>
          <div className="pad"> 
            <h3 style={{padding:"20px"}}>Scratch Pad</h3> 
            <textarea onChange={changeHandler} className="scratchpad">
                {data}
            </textarea>  
          </div>  
        </div>
    )
}

export default ScratchPad
