import React, { useState, useEffect } from 'react'
import Content from '../molecules/Content'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const getVehicles = async () => {
const data = await getDocs(vehiclesRef)
setVehicles(data.docs.map( doc => (
                {
                    ...doc.data(), 
                    id:doc.id 
                }
            )
        )
    )
}

function Example(){
    const [yourDocs, loadYourDocs] = useState(null)

    useEffect(() => {
        // [good practice] preventing memory leak
        let mounted = false

        return () => { mounted = true }
    }, [])

    return  <Content title="Example Queries" text="take a look" />
}

export default Example