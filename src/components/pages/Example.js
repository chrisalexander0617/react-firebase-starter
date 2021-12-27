import React, { useState, useEffect, useRef } from 'react'
import Content from '../molecules/Content'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

function Example(){
    const isMounted = useRef(false)

    const [vehicles, setVehicles] = useState([])
    const vehiclesRef = collection(db, 'vehicles')

    useEffect(() => {
        isMounted.current = true

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

        getVehicles()

        console.log(vehicles)

        return () => { isMounted.current = false }
    }, [])

return  <Content title="Example Queries" text="Check the console to see data" />
}

export default Example