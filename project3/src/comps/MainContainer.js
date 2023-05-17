import './MainContainer.css';
import CardSection from './CardSection';
import Form from './Form';
import ThankYou from './ThankYou';


function MainContainer({formInfo, updateInfo, isComplete}) {

  let currentDisplay;

  if(isComplete) {
    currentDisplay = <ThankYou />
  }else {
    currentDisplay = <Form  updateInfo={updateInfo}/>
  }

  return (

    <main className="main-container">
      <CardSection formInfo={formInfo} />
      {currentDisplay}
    </main>

  )

}

export default MainContainer;