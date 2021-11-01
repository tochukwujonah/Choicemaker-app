import { Close } from '@material-ui/icons'
import { Button, Container, Paper, TextField, Typography } from '@material-ui/core'
import React, {useEffect, useState} from 'react'

import usestyles from '../style';

const Option = (props)=> {

    return (
        <input
        value={props.value}
        placeholder={props.placeholder}
        onChange ={props.changeInput}
      ></input>
    )
}

export default Option
