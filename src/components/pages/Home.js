import React from 'react'
import logo from  '../../firebase-react-logo.png'

export default function Home(){
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Firebase Starter</h1>
                    <p>
                        Your simple <strong>no bullshit</strong> react + firebase starter code. Ya dig?
                    </p>
                    <a
                        className="App-link"
                        href="https://firebase.google.com/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn About Firebase
                    </a>
                </header>
            </div>
        </>
    )
}