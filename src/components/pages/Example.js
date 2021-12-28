import React, { useState, useEffect, useRef } from 'react'
import Content from '../molecules/Content'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

//  You can change the variable names to whatever you like as 
// long as you can make a reference to the collections object

function Example(){
    const [vehicles, setVehicles] = useState([])
    const vehiclesRef = collection(db, 'vehicles')

    useEffect(() => {

        // This variable prevents memory leak when using async calls
        // https://www.loginradius.com/blog/async/how-to-fix-memory-leaks-in-react/
        
        let isMounted = true

        const getVehicles = async () => {
            const data = await getDocs(vehiclesRef)
            if(isMounted){
                setVehicles(data.docs.map( doc => (
                            {
                                ...doc.data(), 
                                id:doc.id 
                            }
                        )
                    )
                )
            }
        }

        getVehicles()

        console.log(vehicles)

        return () => { isMounted = false }
    }, [])

    return  <Content title="Example Queries" text="Check the console to see data" />
}

export default Example