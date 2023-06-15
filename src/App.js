import './App.css';
import { useState, useEffect } from 'react';

// creating component in same file
const Header = () => {
  const [emotion, setEmotion] = useState("sad");
  const [headerColor, setHeaderColor] = useState("#282c34");

  return (
    <>
      <header className="App-header">
        This is the Header component.
        <p>You have chose {emotion}</p>
        <button onClick={() => setEmotion("happy")}>Change emotion</button>
        You have chose
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
