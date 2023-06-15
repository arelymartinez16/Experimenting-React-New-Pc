import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

// creating component in same file
const Header = () => {
  const [emotion, setEmotion] = useState("sad");
  const [headerColor, setHeaderColor] = useState("#282c34");

  const handleColor = () => {
    setHeaderColor("gray");
    // let h = document.getElementsByClassName()
    console.log(headerColor)
  }

  return (
    <>
      <header className="App-header">
        <Navbar />
        This is the Header component.
        <p>You have chose {emotion}</p>
        <button onClick={() => setEmotion("happy")}>Change emotion</button>
        <button onClick={() => handleColor()}>Change color</button>
      </header>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      Hello
    </div>
  );
}

export default App;
