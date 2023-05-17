import './Form.css';

function Form() {

  return (

    <section class="form-container">

      <form class="card-form">

        <label>CARD HOLDER NAME</label>
        <input />
        <p>Can't be blank</p>
        <label>CARD NUMBER</label>
        <input />
        <p>Wrong Numbers</p>
        <div class="date-container">
          <label class="expiration-label">EXP. DATE (MM/YY)</label>
          <input />
          <input />
          <p>Can't be blank</p>
        </div>
        <div class="cvc-container">
          <label class="cvc-label">CVC</label>
          <input />
          <p>Can't be blank</p>
        </div>

        <button class="submit-button">Confirm</button>

      </form>

    </section>

  )

}

export default Form;