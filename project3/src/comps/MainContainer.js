import './MainContainer.css';
import CardSection from './CardSection';
import Form from './Form';
import ThankYou from './ThankYou';


function MainContainer({formInfo, updateInfo, isComplete, updateCompleteStatus}) {

  let currentDisplay;

  if(isComplete) {
    currentDisplay = <ThankYou />
  }else {
    currentDisplay = <Form formInfo={formInfo} updateInfo={updateInfo} isComplete={isComplete} updateCompleteStatus={updateCompleteStatus} />
  }

  return (

    <main className="main-container">
      <CardSection formInfo={formInfo} />
      {currentDisplay}
    </main>

  )

}

export default MainContainer;