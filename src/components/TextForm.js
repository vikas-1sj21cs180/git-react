import React, {useState} from 'react'


export default function TextForm(props) {
  const handleupClick=()=>{
    let newtext=text.toUpperCase()
    setText(newtext);
  }
  
  const handleloClick=()=>{
    let newtext=text.toLowerCase()
    setText(newtext);
  }

 const handleOnChange=(e)=>{
    setText(e.target.value)
 } 

 const handleClearClick=()=>{
  let newtext=''
    setText(newtext);
 }

 const handlelock=()=>{
  console.log('i am copy')
  var text=document.getElementById('mybox')
  text.select();
  text.setSelectionRange(0,999);
  navigator.clipboard.writeText(text.value);
 }

 const handlek=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))
}
  
const hdk=()=>{
  setCount(count+2)
}

 const [count,setCount]=useState(0)
 const [text, setText]=useState('')
  return (
    <>
    <div className='container'>
    <p>you clicked {count}</p>
    <button onClick={hdk}>click me!</button>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="12"></textarea>
        </div>
        <button className="btn primary mx-2" onClick={handleupClick}>convert to uppercase</button>
        <button className="btn primary mx-2" onClick={handleloClick}>convert to lowercase</button>
        <button className="btn primary mx-2" onClick={handleClearClick}>clear text</button>
        <button className="btn primary mx-2" onClick={handlelock}>copy text</button>
        <button className="btn primary mx-2" onClick={handlek}>joim text</button>
    </div>
    <div className='container'>
      <h1>your text summary</h1>
      <p>the characters are {text.length} and {text.split(' ').length} words</p>
      <p>{0.008 * text.split(' ').length} minutes read</p>
      <h4>preview</h4>
      <p>{text}</p>
    </div>
    </>
  )
}
