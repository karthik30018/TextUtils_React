import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
  
} from "react-router-dom";


function App() {
  
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  
  const [mode,setMode] = useState('light');
  const [txt,setTxt] = useState('Enable Dark Mode');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setTxt('Enable Light Mode')
      showAlert("Dark mode has been enabled","success")
    
      document.body.style.backgroundColor='#00264d'
    }
    else{
      setMode('light')
      setTxt('Enable Dark Mode')
      showAlert("Light mode has been enabled","success")
      document.body.style.backgroundColor='white'
     
    }
  }
 
  
   

  return (
    <div > 
          <Router>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}  txt={txt} />
          <Alert alert={alert}/> 
          <div className="container my-3">
          {/* <TextForm  showAlert={showAlert} heading="Try TextUtils - Word Counter,Character Counter,Remove extra Spaces" mode={mode} /> */}
          <Routes>
          <Route  exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path='TextUtils_React' element={ <TextForm  showAlert={showAlert} heading="Try TextUtils - Word counter,Character counter,Remove extra spaces " mode={mode} />}>
          </Route>
          </Routes>
          </div>
          </Router>
     
    </div>
    
  );
}


export default App;
