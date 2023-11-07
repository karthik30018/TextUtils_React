

import React from 'react'
import { useState } from 'react'

function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("upperCase was clicked" + text);
         let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase..!", "success")
       }
    const handleLoClick=()=>{
       
         let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase..!","success")
       }
    const handleClrClick=()=>{
       
         let newText = '';
        setText(newText);
       props.showAlert("Text cleared..!","success")
       }
   
    
       const handleOnChange=(event)=>{
        //console.log("On change")
        setText(event.target.value)
       }
    const [text , setText]= useState('')
   //setText("hello");

   const handleCpyClick = ()=>{
        // let copyText = document.getElementById("myBox")
        // copyText.select();
        navigator.clipboard.writeText(text);
      //document.selection.removeAllRanges();
      props.showAlert("Copied to clipboard..!","success")
      
   }

   const handleSpcClick = ()=>{
    let spcText = text.split(/[  ]+/);
    setText(spcText.join(" "));
   props.showAlert("Extra spaces removed..!","success")
   }
  
   
  return (
    <div>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#003366',color:props.mode==='light'?'black':'white'}}  placeholder="Enter text year..." onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Covert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick} >Covert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClrClick} >Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCpyClick} >Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleSpcClick} >Remove Extra Spaces</button>
        
        </div>
        <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length>0 }).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length>0 }).length} Minutes read</p>
            <h1 >Preview</h1>
            <p >{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        
    </div>
  )
}

export default TextForm


