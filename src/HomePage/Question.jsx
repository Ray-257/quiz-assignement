import React from 'react';

export const  Question  = ({answers,selectedAnswer,onSelectAnswer}) => answers.map((answer ,index)=>
             (<div key={index}>
             <label className="radiocontainer"> 
             <input type="radio" name="quiz" className ="selection" value={answer} checked={answer === selectedAnswer }  onChange ={(event) =>onSelectAnswer(event ,index)}/>
             {answer}
             </label>
           </div>))
            
export default Question