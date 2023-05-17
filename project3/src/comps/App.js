import './App.css';
import Nav from './Nav';
import MainContainer from './MainContainer';
import Footer from './Footer';

import { useState } from 'react'

function App() {

  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="App">
      <Nav />
      <MainContainer isComplete={isComplete}/>
      <Footer />
    </div>
  );
}

export default App;
