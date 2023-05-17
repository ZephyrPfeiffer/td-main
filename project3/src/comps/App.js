import './App.css';
import Nav from './Nav';
import MainContainer from './MainContainer';
import Footer from './Footer';

import { useState } from 'react'

function App() {

  const initialFormState = {

    name: 'Jane Appleseed',
    cardNumber: '0000000000',
    monthExpiration: '00',
    yearExpiration: '00',
    cvc: '000',

  };

  const [isComplete, setIsComplete] = useState(false);
  const [formInfo, setFormInfo] = useState(initialFormState)

  function updateInfo(propertyName, value) {

    setFormInfo({...formInfo, [propertyName]: value})

  }

  return (
    <div className="App">
      <Nav />
      <MainContainer formInfo={formInfo} isComplete={isComplete} updateInfo={updateInfo}/>
      <Footer />
    </div>
  );
}

export default App;
