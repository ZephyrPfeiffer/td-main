import CardFront from './CardFront'
import CardBack from './CardBack'
import './CardSection.css'

function CardSection({formInfo}) {

  return(

    <section className="card-container">
      <CardFront formInfo={formInfo}/>
      <CardBack formInfo={formInfo} />
    </section>

  )

}

export default CardSection;