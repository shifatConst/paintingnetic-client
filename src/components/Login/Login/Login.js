import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                console.log('after sign in', signedInUser.email);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    return (
        <div className="text-center mt-5">
            <button className="btn btn-success" onClick={handleGoogleSignIn}> Login with google </button>
        </div>
    );
};

export default Login;