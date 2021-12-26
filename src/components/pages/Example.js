import React, { useState, useEffect } from 'react'

export default function Example(){
    const [docs, loadDocs] = useState("test")
    
    useEffect(() => {
        // mounted code goes here
        console.log('Example Init')
    })
    
    return (
        <>
            <div className="Content">
                <h1>Example Query</h1>
                <code>Check the console to see more</code>
            </div>
        </>
    )
}