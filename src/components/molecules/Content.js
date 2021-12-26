import React from 'react'

export default function Content(props){
    return (
        <>
            <div className="Content">
                <h1>{props.title}</h1>
                <code>{props.text}</code>
            </div>
        </>
    )
}