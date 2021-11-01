import { Button, Container, Paper, TextField, Typography } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import usestyles from '../style';

import AnswersView from './Answers';
import Popularity from './Popularity';


const CreateQuestionView = ()=> {
    const classes = usestyles();

    const alphabets = ["A:","B:","C:","D:","E:","F:","G:","H:","I:","J:","K:","L:","M:","N:","O:","P:","Q:","R:","S:","T:","U:","V:","W:","X:","Y:","Z:"];

    //Nodelist
    const [options, setOptions] = useState([]);
    const [showPopularity, setShowPopularity] = useState(false);
    const [inactive, setInactive] = useState(false);
    const [answerView, setAnswerView] = useState(false);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [optionVal, setOptionVal] = useState({});

    const [allQuestions, setAllQuestions] = useState([]);


    
    // console.log((<Option value="Jesus is Lord" />).props.value);

    const addOption = _=> {
        const id = options.length;
        const updatedState = {...optionVal, [id]: ''};
        setOptionVal(updatedState);
        // console.log(optionVal);
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
            } else setInactive(true);
    

        
    }


    //Remove option
    const removeOption = _=> {
        options.pop();
        setOptions([...options]);

        //Remove last object from state
        delete optionVal[Object.keys(optionVal).length - 1];
    }

    const showAnswerView = _=> {
        let ans = [];
        
        //Populate the answers array with values from the optionVal state object
        if(question === '' || question ===  null){
            for(let txt in optionVal){
                if(optionVal[txt] === ''){
                    alert("Question field and options field must be filled out");
                    return;
                }
            }

            alert("Question field cannot be empty");
        }

        else {
            for(let txt in optionVal){
                if(optionVal[txt] === ''){
                    alert("All options field must be filled out else remove unncessary option field");
                    return;
                }

                ans.push(`${alphabets[parseInt(txt)]} ${optionVal[txt]}`);

                //Check if answersview is opened
                if(answerView){
                    setAnswers([...ans]);

                    //Set popularity
                    setAllQuestions([...allQuestions, question]);

                    return;
                }
               

                setAnswers([...answers, ...ans]);
                setAnswerView(true);

                //Set popularity
                setAllQuestions([...allQuestions, question]);


                


                


                


                //Clear all values from optionVal state
                
            }
    
            
        }
        
        
    }



    const optionOnChange = (e, id)=> {
        const updatedState = {...optionVal, [id]: e.target.value};
        setOptionVal(updatedState);
    }

    const generateOptions = _=> {
        //Add three options
        addOption();
        console.log(options);
    }

    const onQuestionChange = (e)=> {

        setQuestion(e.target.value);
    }

    


    useEffect(()=> {
        generateOptions();
    }, []);


    return (
       <>


        {
            !showPopularity


            ?


            <div className="page-wrapper">
            <Container className="container">
                    <div className="text">
                        <Typography variant="h3">Toks Choice Maker App</Typography>

                        <Typography variant="caption">Hello Again, welcome to Toks Choice Maker App. We help provide random answers to you questions,
                            helping make decision easy for you.
                        </Typography>
                    </div>
                    
                <br />
                <div className="wrapper">
                    <Paper className={classes.paper}>
                    
                        {/* create question */}
                        <Typography align="left" variant="h5">Question</Typography>
                        <TextField className={classes.textField} label="Enter question" fullWidth variant="outlined" onChange={onQuestionChange} value={question} />
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


            {answerView ? <AnswersView setAnswerView={setAnswerView} question={question} answers={answers} setShowPopularity={setShowPopularity} setAnswers={setAnswers} /> : null}
        </div>
       

       :

       <Popularity setShowPopularity={setShowPopularity} setAnswerView={setAnswerView} setQuestion={setQuestion} setAnswers={setAnswers} allQuestions={allQuestions} />
        }


       </>
    )
}

export default CreateQuestionView
