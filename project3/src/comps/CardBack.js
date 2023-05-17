import './CardBack.css'

function CardBack({formInfo}) {

  return (

    <section className="back-container">

      <span className="cvc-info">{formInfo.cvc}</span>

    </section>

  )

}

export default CardBack;