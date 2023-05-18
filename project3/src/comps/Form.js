import './Form.css';
import Input from 'react-input-auto-format';


function Form({isComplete, updateCompleteStatus, updateInfo, validateForm, validationInfo}) {

  let errorMessages = {

    isEmptyError: 'Can\'t be blank',
    hasLetterError: 'Wrong format, numbers only',

  }

  let nameErrorMessage;
  let cardNumberErrorMessage;
  let dateErrorMessage;
  let cvcErrorMessage;

  async function formSubmit(event) {

    event.preventDefault()
    await validateForm()
    console.log(validationInfo)

    for(let property in validationInfo) {

      if(validationInfo[property]) {
        updateCompleteStatus(false)
        break;
      }

    }

    if(!isComplete) {
      if(validationInfo.nameEmpty) {

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

    }

  }

  return (

    <section className="form-container">

      <form className="card-form">

        <label>CARD HOLDER NAME</label>
        <input name="name" type="text" maxLength="25" placeholder="e.g. Jane Appleseed" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
        }}/>
        {nameErrorMessage}
        <label>CARD NUMBER</label>
        <Input name="cardNumber" type="text" maxLength="19" format="#### #### #### ####" placeholder="e.g. 1234 5678 9123 0000" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
        }}/>
        {cardNumberErrorMessage}
        <div className="date-container">
          <label className="expiration-label">EXP. DATE (MM/YY)</label>
          <input name="monthExpiration" type="text" maxLength="2" placeholder="MM" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
          }}/>
          <input name="yearExpiration" type="text" maxLength="2" placeholder="YY" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
          }}/>
          {dateErrorMessage}
        </div>
        <div className="cvc-container">
          <label className="cvc-label">CVC</label>
          <input name="cvc" type="text" maxLength="3" placeholder="e.g 123" onChange={(e) => {
          
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