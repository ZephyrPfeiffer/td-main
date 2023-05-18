import './App.css';
import Nav from './Nav';
import MainContainer from './MainContainer';
import Footer from './Footer';

import { useState } from 'react'

const initialFormState = {

  name: 'Jane',
  cardNumber: '0000 0000 0000 0000',
  monthExpiration: '00',
  yearExpiration: '00',
  cvc: '000',

};

function App() {

  // const initialValidationState = {

  //   nameEmpty: false,
  //   cardNumberEmpty: false,
  //   cardNumberLetters: false,
  //   monthEmpty: false,
  //   monthLetters: false,
  //   yearEmpty: false,
  //   yearLetters: false,
  //   cvcEmpty: false,
  //   cvcLetters: false,

  // }

  const [isComplete, setIsComplete] = useState(false);
  const [formInfo, setFormInfo] = useState(initialFormState);
  // const [validationInfo, setValidationInfo] = useState(initialValidationState);

  function updateInfo(propertyName, value) {

    setFormInfo({...formInfo, [propertyName]: value})

  }

  function updateCompleteStatus(status) {

    setIsComplete(status);

  }

  // function validateForm() {

  //   // validate if any form input is empty
  //   setValidationInfo({...validationInfo, nameEmpty: isEmpty(formInfo.name)})
  //   setValidationInfo({...validationInfo, cardNumberEmpty: isEmpty(formInfo.cardNumber)})
  //   setValidationInfo({...validationInfo, monthEmpty: isEmpty(formInfo.monthExpiration)})
  //   setValidationInfo({...validationInfo, yearEmpty: isEmpty(formInfo.yearExpiration)})
  //   setValidationInfo({...validationInfo, cvcEmpty: isEmpty(formInfo.cvc)})

  //   // validate if certain inputs have letters in them
  //   setValidationInfo({...validationInfo, cardNumberLetters: hasLetters(formInfo.cardNumber)})
  //   setValidationInfo({...validationInfo, monthLetters: hasLetters(formInfo.monthExpiration)})
  //   setValidationInfo({...validationInfo, yearLetters: hasLetters(formInfo.yearExpiration)})
  //   setValidationInfo({...validationInfo, cvcLetters: hasLetters(formInfo.cvc)})

  //   // console.log(isEmpty(formInfo.name))
  //   // console.log(validationInfo.nameEmpty)

  //   return;
      
  // }

  // function isEmpty(value) {

  //   let invalid = false;

  //   if(value.length <= 0) {

  //     invalid = true;

  //   }

  //   return invalid;

  // }

  // function hasLetters(value) {

  //   let invalid = false;
  //   let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //   for(let i = 0; i < value.length; i++) {

  //     if(numbers.indexOf(value[i]) === -1) {

  //       invalid = true;
  //       break;

  //     }

  //   }

  //   return invalid;

  // }

  return (
    <div className="App">
      <Nav />
      <MainContainer formInfo={formInfo} isComplete={isComplete} updateCompleteStatus={updateCompleteStatus} updateInfo={updateInfo} />
      <Footer />
    </div>
  );
}

export default App;
