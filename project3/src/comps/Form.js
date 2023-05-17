import './Form.css';

function Form({updateInfo}) {

  function formSubmit(event) {

    event.preventDefault()

  }

  return (

    <section className="form-container">

      <form className="card-form">

        <label>CARD HOLDER NAME</label>
        <input name="name" type="text" maxLength="25" placeholder="e.g. Jane Appleseed" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
        }}/>
        <p>Can't be blank</p>
        <label>CARD NUMBER</label>
        <input name="cardNumber" type="text" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxLength="19" placeholder="e.g. 1234 5678 9123 0000" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
        }}/>
        <p>Wrong Numbers</p>
        <div className="date-container">
          <label className="expiration-label">EXP. DATE (MM/YY)</label>
          <input name="monthExpiration" type="text" maxLength="2" placeholder="MM" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
          }}/>
          <input name="yearExpiration" type="text" maxLength="2" placeholder="YY" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
          }}/>
          <p>Can't be blank</p>
        </div>
        <div className="cvc-container">
          <label className="cvc-label">CVC</label>
          <input name="cvc" type="text" maxLength="3" placeholder="e.g 123" onChange={(e) => {
          
          updateInfo(e.target.name, e.target.value)
        
          }}/>
          <p>Can't be blank</p>
        </div>

        <button className="submit-button" onClick={formSubmit}>Confirm</button>

      </form>

    </section>

  )

}

export default Form;