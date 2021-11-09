import React from "react";
import "./styles.css";
import StepProgressBar from "react-step-progress";
import "./goals.css";
import "react-step-progress/dist/index.css";


export interface IGoalsPageProps {}

export default function GoalsPage(props: IGoalsPageProps) {
  
  const step1Content = <h1>Hand Raises</h1>;
  const step2Content = <h1> Student Speech</h1>;
  const step3Content = <h1> Instructor Speech</h1>;
  const finishContent = <h2 className = "marginTitles"> Thanks for your thoughts!</h2>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {  return true;
  }

  function step3Validator() {
    return 'Done';
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <div className="goalsPage">
      <div className="pageLeft">
        <div className= "title"> Metrics </div>
      </div>
      <div className="pageRight">
        <div className= "title"> Reflections</div>
        <div className = "labelProgress"  id="reflectionsBar" >
              <StepProgressBar onSubmit={handleSubmit} 
                startingStep={0}
                steps={ [
                  {
                    label: "Hand Raises",
                    name: "handRaises",
                    content: step1Content
                    
                  },
                  {
                    label: "Student Speech",
                    name: "studentSpeech",
                    content: step2Content
                  },
                  {
                    label: "Instructor Speech",
                    name: "instructorSpeech",
                    content: step3Content,
                    validator: step2Validator
                  },
                  {
                    label: "Finish",
                    name: "Finish",
                    content: finishContent
                  }
                ]}
              />
    </div>
         
      </div>
    </div>
  );
}

