import './MainContainer.css';
import CardSection from './CardSection';
import Form from './Form';
import ThankYou from './ThankYou';


function MainContainer({formInfo, isComplete, updateCompleteStatus, updateInfo, validateForm, validationInfo}) {

  let currentDisplay;

  if(isComplete) {
    currentDisplay = <ThankYou />
  }else {
    currentDisplay = <Form isComplete={isComplete} updateCompleteStatus={updateCompleteStatus} updateInfo={updateInfo} validateForm={validateForm} validationInfo={validationInfo} />
  }

  return (

    <main className="main-container">
      <CardSection formInfo={formInfo} />
      {currentDisplay}
    </main>

  )

}

export default MainContainer;