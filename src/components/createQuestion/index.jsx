import { Button, Container, Paper, TextField, Typography } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import usestyles from '../style';

import AnswersView from './Answers';


const CreateQuestionView = ()=> {
    const classes = usestyles();

    const alphabets = ["A:","B:","C:","D:","E:","F:","G:","H:","I:","J:","K:","L:","M:","N:","O:","P:","Q:","R:","S:","T:","U:","V:","W:","X:","Y:","Z:"];

    //Nodelist
    const [options, setOptions] = useState([]);
    const [inactive, setInactive] = useState(false);
    const [answerView, setAnswerView] = useState(false);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [optionVal, setOptionVal] = useState({
        0:'',
        1:'',
        2:''
    });

    
    // console.log((<Option value="Jesus is Lord" />).props.value);

    const addOption = _=> {
        const id = options.length;
        // const input = [];
        // input.push()
        setOptionVal({...optionVal, [id]:'more'})

        console.log(optionVal);

        if(options.length  < alphabets.length) {
            setOptions([
                ...options, 
                <input
                    placeholder={alphabets[id]}
                    key={id}
                    value={optionVal[id]}
                    onChange={(e)=> optionOnChange(e, id)}
                    className="input"
                 ></input>
            ]);

            

            

            
        }
        else setInactive(true);
    }

    const removeOption = _=> {
        options.pop();
        setOptions([...options]);
    }

    const showAnswerView = _=> {
        console.log(options )
        let ans = []
        for(let option of options){
            ans.push(option.props.value);
        }
        setAnswers([...answers, ...ans]);
        setAnswerView(true);
        
        
    }



    const optionOnChange = (e, id)=> {
        setOptionVal({...optionVal, [id]: e.target.value})
    }

    const generateOptions = _=> {
        const input = []
        for(let i = 0; i < 3; i++){
            input.push(
                <input
                placeholder={alphabets[i]}
                key={i}
                value={optionVal[i]}
                onChange={(e)=> optionOnChange(e, i)}
                className="input"
            ></input>
            )
        }

        setOptions(input);
    }

    const onQuestionChange = (e)=> {

        setQuestion(e.target.value);
    }

    


    useEffect(()=> {
        generateOptions();
    }, []);


    return (
        <>
            <Container className="container">
                    <div className="text">
                        <Typography variant="h3">Toks Choice Maker App</Typography>

                        <Typography variant="caption">Hello Again, welcome to Toks Choice Maker App. We help provide random answers to you questions,
                            helping make decision easy for you. We also give you a list of 
                        </Typography>
                    </div>
                    
                <br />
                <div className="wrapper">
                    <Paper className={classes.paper}>
                    
                        {/* create question */}
                        <Typography align="left" variant="h5">Question</Typography>
                        <TextField className={classes.textField} placeholder="Q: Enter question" fullWidth variant="outlined" onChange={onQuestionChange} value={question} />
                        <br /> <br />

                        {/* create question */}
                        <Typography align="left" variant="h5">Options</Typography>
                        {/* {
                            options.map((OptionView, idx) => <OptionView key={idx} placeholder={alphabets[idx]} />)
                        } */}
                        {
                            options.map(OptionView => OptionView)
                        }

                        
                        <div className="btn-group">
                            <Button className={inactive ? classes.btnInactive : classes.smBtn} onClick={addOption}><Add /> Add option</Button>
                            <Button className={inactive ? classes.btnInactive : classes.smBtn} onClick={removeOption}><Delete /> Remove Option </Button>
                        </div>

                        <Button className={classes.floatBtn} onClick={showAnswerView}>Generate answer</Button>
                    </Paper>
                </div>
            
            </Container>


            {answerView ? <AnswersView question={question} answers={answers} /> : null}
        </>
    )
}

export default CreateQuestionView
