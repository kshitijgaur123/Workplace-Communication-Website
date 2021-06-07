import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message)
        });
    };
    return (
        <div className = "login">
            <div className = "login__container">
                <img src = "https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
                <h1>This Kshitij Gaur's HQ</h1>
                <p>The coder</p>
                <Button onClick = {signIn}>SIGN IN WITH GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
