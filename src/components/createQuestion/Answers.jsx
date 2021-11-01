import { Button, Container } from '@material-ui/core'
import React, { useState } from 'react'

import '../style.css'
import usestyles from '../style';

const AnswersView = (props)=> {
    const classes = usestyles();

    const [rand, setRand] = useState(Math.floor(Math.random()*props.answers.length));

    const answerAgain = _=> setRand(Math.floor(Math.random()*props.answers.length));

    // console.log(props.answers);


    const viewQuestionPop = _=> {
        props.setShowPopularity(true);
    }

    const closeAnswersView = _=> {
        props.setAnswerView(false);
        props.setAnswers([]);
    }


    return (
        <div className="answer-cover">
        <Button size="large" onClick={answerAgain} className="btn-lg"> Answer again</Button>
        <section className="btn-group col">
            <Button size="small" className="btn-std" onClick={closeAnswersView}>CLOSE</Button>
            <Button size="small" className="btn-std" onClick={viewQuestionPop}>View question popularity</Button>

        </section>

            <Container>
            
                <div className="flex col">
                
                    <main>
                        <h1>Q: {props.question}</h1>
                        <ul>
                            {
                                props.answers.map((ans, idx) => <li key={idx} className={rand === idx ? "active" : null}>{ans}</li>)
                            }
                        </ul>
                    </main>
                    
                </div>
            </Container>
            
        </div>
    )
}

export default AnswersView
