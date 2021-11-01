import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from '../style';

import '../style.css'


function ModalView() {

    const classes = useStyles();

    const [message, setMessage] = useState("");
    let charIdx = 0;
    let full = "";

    //Create typewritter effect
    const typewritter = _=>{
        const interval = setInterval(_=> {
            if(charIdx < text.length) typeText();
            else {
                clearInterval(interval);
            }
        }, 1000);
    }

    const typeText = _=> {
        full = message+text[charIdx];
        console.log(full);
        setMessage(full);

        charIdx++;
    }

    useEffect(()=> {
        typewritter();
    }, [])

    

    const text = "Hello there, welcome to your number one choice make app. Hope you have a good time using our app!!!";

    return (
        <div className="modal">
            <section className="text">
                <h2>{message}<span className="cursor"></span></h2>
            </section>

            <div className="btn-bottom">
                <Button className={classes.button}>continue</Button>
            </div>
            
        </div>
    )
}

export default ModalView
