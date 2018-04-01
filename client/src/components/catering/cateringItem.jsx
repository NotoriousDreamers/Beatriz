import React from 'react';

const CateringItem =(props)=>(
  <div>

  <form>

    <span><h1>{props.question.questions}</h1></span>
  <div className="radio">
  <label>
  <input type="radio" value="option1"/>
             <h2>{props.question.answer1}</h2>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              <h2>{props.question.answer2}</h2>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" />
              <h2>{props.question.answer3}</h2>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" />
              <h2>{props.question.answer4} </h2>
            </label>
          </div>
        </form>
    </div>
)
export default CateringItem;
