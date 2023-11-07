//import React,{useState} from 'react'

function About(props) {
  // const [myStyle,setMyStyle] = useState({
  //   color:"black",
  //   backgroundColor:"white"
  // });
  // const [btnText,setbtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () =>{
  //   if(myStyle.color === 'black'){
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setbtnText("Enable Light Mode")
  //   }else{
  //     setMyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setbtnText("Enable Dark Mode")
  //   }
    
  // }

  return (
    
    <div>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={{backgroundColor: props.mode==='light'?'white':'#2e4b6b',color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='light'?'white':'#2e4b6b',color:props.mode==='light'?'black':'white'}}>
            <div className="accordion-body" style={{color:props.mode==='light'?'black':'white'}}>
            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or manipulate text.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'#2e4b6b',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='light'?'white':'#2e4b6b',color:props.mode==='light'?'black':'white'}}>
            <div className="accordion-body">
            TextUtils is free character Counter tool that orovides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'#2e4b6b',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='light'?'white':'#2e4b6b',color:props.mode==='light'?'black':'white'}}>
            <div className="accordion-body" style={{color:props.mode==='light'?'black':'white'}}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, essays, etx.
            </div>
            </div>
            </div>
            </div>
      {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button> */}
        </div>  
    </div>
  )
}

export default About
