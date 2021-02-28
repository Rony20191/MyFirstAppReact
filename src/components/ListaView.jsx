import classes from '*.module.css';
import React,{ Component } from 'react';
import TextField from '@material-ui/core/TextField'
import './style.css'
export class ListaView extends Component{
    render(){
        return (
            <form >
                <TextField id="name" label="Nome"/>
            </form>
        );
    }
}