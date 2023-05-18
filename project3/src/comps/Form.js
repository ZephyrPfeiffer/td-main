import './Form.css';
import { useState } from 'react'
import Input from 'react-input-auto-format';

let nameErrorMessage;
let cardNumberErrorMessage;
let dateErrorMessage;
let cvcErrorMessage;

let errorMessages = {

  isEmptyError: 'Can\'t be blank',
  hasLetterError: 'Wrong format, numbers only',

}

const initialValidationState = {

  nameEmpty: false,
  cardNumberEmpty: false,
  cardNumberLetters: false,
  monthEmpty: false,
  monthLetters: false,
  yearEmpty: false,
  yearLetters: false,
  cvcEmpty: false,
  cvcLetters: false,

}

function Form({formInfo, updateInfo, isComplete, updateCompleteStatus}) {

  // let nameErrorMessage;
  // let cardNumberErrorMessage;
  // let dateErrorMessage;
  // let cvcErrorMessage;

  // let errorMessages = {

  //   isEmptyError: 'Can\'t be blank',
  //   hasLetterError: 'Wrong format, numbers only',

  // }

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

  const [validationInfo, setValidationInfo] = useState(initialValidationState);

  function validateForm() {

    // validate if any form input is empty
    setValidationInfo({...validationInfo, nameEmpty: isEmpty(formInfo.name)})
    setValidationInfo({...validationInfo, cardNumberEmpty: isEmpty(formInfo.cardNumber)})
    setValidationInfo({...validationInfo, monthEmpty: isEmpty(formInfo.monthExpiration)})
    setValidationInfo({...validationInfo, yearEmpty: isEmpty(formInfo.yearExpiration)})
    setValidationInfo({...validationInfo, cvcEmpty: isEmpty(formInfo.cvc)})

    // validate if certain inputs have letters in them
    setValidationInfo({...validationInfo, cardNumberLetters: hasLetters(formInfo.cardNumber)})
    setValidationInfo({...validationInfo, monthLetters: hasLetters(formInfo.monthExpiration)})
    setValidationInfo({...validationInfo, yearLetters: hasLetters(formInfo.yearExpiration)})
    setValidationInfo({...validationInfo, cvcLetters: hasLetters(formInfo.cvc)})

    // console.log(isEmpty(formInfo.name))
    // console.log(validationInfo.nameEmpty)

    return;
      
  }

  function isEmpty(value) {

    let invalid = false;

    if(value.length <= 0) {

      invalid = true;

    }

    return invalid;

  }

  function hasLetters(value) {

    let invalid = false;
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for(let i = 0; i < value.length; i++) {

      if(numbers.indexOf(value[i]) === -1) {

        invalid = true;
        break;

      }

    }

    return invalid;

  }

  function formSubmit(event) {

    let formComplete = true;

    event.preventDefault()
    validateForm()

    for(let property in validationInfo) {

      if(validationInfo[property]) {
        formComplete = false;
      }

    }

    if(!formComplete) {

      if(validationInfo.emptyName) {

        nameErrorMessage = <p>{errorMessages.isEmptyError}</p>

      }else {

        nameErrorMessage = null;

      }

      if(validationInfo.cardNumberEmpty) {

        cardNumberErrorMessage = <p>{errorMessages.isEmptyError}</p>

      }else if(validationInfo.cardNumberLetters) {

        cardNumberErrorMessage = <p>{errorMessages.hasLetterError}</p>

      }else {

        cardNumberErrorMessage = null;

      }

      if(validationInfo.monthEmpty || validationInfo.yearEmpty) {

        dateErrorMessage = <p>{errorMessages.isEmptyError}</p>

      }else if(validationInfo.monthLetters || validationInfo.yearLetters) {

        dateErrorMessage = <p>{errorMessages.hasLetterError}</p>

      }else {

        dateErrorMessage = null;

      }

      if(validationInfo.cvcEmpty) {

        cvcErrorMessage = <p>{errorMessages.isEmptyError}</p>

      }else if(validationInfo.cvcLetters) {

        cvcErrorMessage = <p>{errorMessages.hasLetterError}</p>

      }else {

        cvcErrorMessage = null;

      }

    }else {

      updateCompleteStatus(true)

    }


  }

  return (

    <section className="form-container">

      <form className="card-form">

        <label>CARD HOLDER NAME</label>
        <input class="name" name="name" type="text" maxLength="25" placeholder="e.g. Jane Appleseed" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
        }}/>
        {nameErrorMessage}
        <label>CARD NUMBER</label>
        <Input name="cardNumber" type="text" maxLength="19" format="#### #### #### ####" placeholder="e.g. 1234 5678 9123 0000" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
        }}/>
        {cardNumberErrorMessage}
        <div className="date-cvc-container">
          <label className="expiration-label">EXP. DATE (MM/YY)</label>
          <label className="cvc-label">CVC</label>
          <input className="month" name="monthExpiration" type="text" maxLength="2" placeholder="MM" onChange={(e) => {
          
            updateInfo(e.target.name, e.target.value)
        
          }}/>
          <input className="year" name="yearExpiration" type="text" maxLength="2" placeholder="YY" onChange={(e) => {
          
            updateInfo(e.target.name, e.target.value)
        
          }}/>
          {dateErrorMessage}
          <input className="cvc" name="cvc" type="text" maxLength="3" placeholder="e.g 123" onChange={(e) => {
          
            updateInfo(e.target.name, e.target.value)
        
          }}/>
          {cvcErrorMessage}
        </div>

        <button className="submit-button" onClick={formSubmit}>Confirm</button>

      </form>

    </section>

  )

}

export default Form;