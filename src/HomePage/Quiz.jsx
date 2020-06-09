import React from 'react';
import data from '../data/data';
import Question from './Question';
import "./quiz.css"

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            currentSelectedAnswer :'',
            selectedAnswers:{},
            completed:false
        }
    }
    onSelectAnswer =(event,index) =>{
       const selectedAnswers = {
         ...this.state.selectedAnswers,
         [this.state.currentQuestion]:index
       };
        this.setState({
          currentSelectedAnswer : event.target.value,
          selectedAnswers
          })
    }
   nextQuestion = () =>  {
   const nextState = this.state.currentQuestion  + 1;
  if(nextState <= (data.length -1)){
   this.setState({
        currentQuestion :nextState,
        currentSelectedAnswer:''
      })
  } else {
   this.setState({completed:true});
  }
}
calcaulateScore = () => {
  const allAnswers = Object.values(this.state.selectedAnswers);
  const score =  data.filter((item ,index) => item.correct-1 === allAnswers[index]).length;
  return score ? (score / data.length) * 100 : 0;  
}
    render() {
      const {currentSelectedAnswer,currentQuestion,completed}  = this.state;
       const {question,answers} = data[currentQuestion];
        return (
            <div className="container">
                <div className="row">
                    {completed  ?
                    <div className="summary">  
                      Your scrore is {this.calcaulateScore()}%.
                    </div>
                    : (<div>
                        <div id="question">
                            <h4>Question {currentQuestion + 1}/{data.length}</h4>
                            <p>{question}</p>
                        </div>
                        <Question answers={answers} onSelectAnswer ={this.onSelectAnswer} selectedAnswer= {currentSelectedAnswer}/>
                        <div className="next-button">
                            <button className="fancy-btn" onClick={this.nextQuestion} >{currentQuestion===data.length-1 ? 'Finish quiz' : 'Next question'}</button>
                        </div>
                    </div>)
                  }
                </div>
            </div>
        );
    }
};

