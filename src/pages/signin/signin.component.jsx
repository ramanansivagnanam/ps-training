import React from 'react'
import './signin.styles.scss';
import SignInComponent from '../../components/sign-in-component/signin-component';
import SignUpComponent from '../../components/sign-up-component/sign-up.component';

export default function Signin() {
    return (
        <div className="sign-in-container">
            <SignUpComponent />
            <SignInComponent/>

        </div>
    )
}
