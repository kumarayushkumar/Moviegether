import { useEffect, useState } from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";

import './App.css';
import getAuth from './config/firebase-config.js';
import Home from './components/home.js';

function App() {
    const [auth, setAuth] = useState(false)
    const [userToken, setUserToken] = useState(null)

    useEffect(() => {
        onAuthStateChanged(getAuth, (userCred) => {
            if(userCred) {
                // setUserToken()
                setAuth(true)
                userCred.getIdToken().then((token) => {
                    console.log(token)
                    setUserToken(token)
                })
            }
        })
    }, [])

    const logIn = () => {
        signInWithPopup(getAuth, new GoogleAuthProvider())
        .then((userCred) => {
            if(userCred) {
                setAuth(true)
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="App">
            { auth ? (<Home userToken = {userToken} />) : (<button onClick={logIn}>Log in with Google</button>) }
        </div>
    );
}

export default App;
