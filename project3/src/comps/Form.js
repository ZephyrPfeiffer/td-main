import './Form.css';

function Form() {

  // function formSubmit(event) {

  //   event.preventDefault

  // }

  return (

    <section className="form-container">

      <form className="card-form">

        <label>CARD HOLDER NAME</label>
        <input type="text" placeholder="e.g. Jane Appleseed" />
        <p>Can't be blank</p>
        <label>CARD NUMBER</label>
        <input type="tel" max="16" placeholder="e.g. 1234 5678 9123 0000" />
        <p>Wrong Numbers</p>
        <div className="date-container">
          <label className="expiration-label">EXP. DATE (MM/YY)</label>
          <input type="number" max="2" placeholder="MM" />
          <input type="number" max="2" placeholder="YY" />
          <p>Can't be blank</p>
        </div>
        <div className="cvc-container">
          <label className="cvc-label">CVC</label>
          <input type="number" max="3" placeholder="e.g 123" />
          <p>Can't be blank</p>
        </div>

        <button className="submit-button">Confirm</button>

      </form>

    </section>

  )

}

export default Form;