import CardFront from './CardFront'
import CardBack from './CardBack'
import './CardSection.css'

function CardSection() {

  return(

    <section class="card-container">
      <CardFront />
      <CardBack />
    </section>

  )

}

export default CardSection;