import { Button, Container } from '@material-ui/core'
import React, { useState } from 'react'

import '../style.css'
import usestyles from '../style';

const AnswersView = (props)=> {
    const classes = usestyles();

    const [rand, setRand] = useState(Math.floor(Math.random()*props.answers.length));

    const answerAgain = _=> setRand(Math.floor(Math.random()*props.answers.length));

    // console.log(props.answers);


    return (
        <div className="answer-cover">

            <Container className={classes.container}>
                <div className="flex">
                    <main>
                        <h1>{props.question}</h1>
                        <ul>
                            {
                                props.answers.map((ans, idx) => <li key={idx} className={rand === idx ? "active" : null}>{ans}</li>)
                            }
                        </ul>
                    </main>
                    <aside>

                        <Button size="large" onClick={answerAgain}>Answer again</Button>
                        <Button size="small">Create new question</Button>
                        <Button size="small">View question popularity</Button>
                        

                    </aside>
                </div>
            </Container>
            
        </div>
    )
}

export default AnswersView
