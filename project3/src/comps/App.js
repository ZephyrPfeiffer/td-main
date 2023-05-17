import './App.css';
import Nav from './Nav';
import MainContainer from './MainContainer';
import Footer from './Footer';

import { useState } from 'react'

function App() {

  const initialFormState = {

    name: '',
    cardNumber: null,
    monthExpiration: null,
    yearExpiration: null,
    cvc: null,

  };

  const [isComplete, setIsComplete] = useState(false);
  const [formInfo, setFormInfo] = useState(initialFormState)

  return (
    <div className="App">
      <Nav />
      <MainContainer isComplete={isComplete}/>
      <Footer />
    </div>
  );
}

export default App;
