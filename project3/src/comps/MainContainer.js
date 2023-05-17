import './MainContainer.css';
import CardSection from './CardSection';
import Form from './Form';
import ThankYou from './ThankYou';


function MainContainer({isComplete}) {

  let currentDisplay;

  if(isComplete) {
    currentDisplay = <ThankYou />
  }else {
    currentDisplay = <Form />
  }

  return (

    <main className="main-container">
      <CardSection />
      {currentDisplay}
    </main>

  )

}

export default MainContainer;