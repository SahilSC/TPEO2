import logo from './logo.svg';
import './App.css';
import {ListItem, Grid} from '@mui/material'
import {useState} from 'react'

function MessageComponent({number, message, responder}) {
    return (
        <>
        <ListItem key = {number}>
            <Grid>
                <Grid item xs = {12}>

                </Grid>
            </Grid>
        </ListItem>  
        </>
    )
}

export default MessageComponent;
