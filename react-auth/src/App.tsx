import React from 'react';
import './App.css';
import Login from './Pages/Login'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register';

function App() {
  const[name,setName] = useState('')

    useEffect(effect:()=>{
        (
            async()=>{
                await fetch(input:'http://localhost:8000/api/user', init:{
                    headers: {'Content-Type':'application/json'},
                    credentials:'include'
                })
                const content = await response.json()
                setName(content.name)
            }
        )();
    })
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar name={name}/>
        <main className="form-signin">
            <Route path="/" exact component={()=><Home name={name} />} />
            <Route path="/login" component = {Login}/>
            <Route path="/Register" component = {Register}/>
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
