import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MyRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
    
  )
}

// creating component in same file
const Header = () => {
  const [emotion, setEmotion] = useState("sad");
  const [headerColor, setHeaderColor] = useState("#282c34");

  const handleColor = (e) => {
    // setHeaderColor("gray");
    // let h = document.getElementsByClassName()
    setHeaderColor(e)
    console.log(headerColor)
  }
  useEffect(() => {
    let headerToChange = document.getElementById("header_ID")
    headerToChange.style.backgroundColor = headerColor
  }, [headerColor])

  return (
    <>
      <header id='header_ID' className="App-header">
        <Navbar />
        This is the Header component.
        <p>You have chose {emotion}</p>
        <button onClick={() => setEmotion("happy")}>Change emotion</button>
        {/* <button onClick={() => handleColor()}>Change color</button> */}
        <input type='color' onSelect={(e) => handleColor(e.target.value)} />
      </header>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
