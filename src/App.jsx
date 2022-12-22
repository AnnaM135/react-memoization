import { useState } from "react";
import './App.css'
import Blog from "./components/Blog";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const handleClick = () => setSignedIn(!signedIn);
  console.log('Rendering App Component')
  return (
    <main>
      <nav>
        <button onClick={handleClick}>Sign Out</button>
        <Blog signedIn={signedIn} setSignedIn={setSignedIn} />
      </nav>
    </main>
  )
}

export default App
