import React from 'react'
import {Link} from "react-router-dom";

export default function Nav(){
    return  (
        <>   
            <nav className="Nav">
                <Link className="NavLink" to="/">Home</Link>
                <Link className="NavLink" to="/example">Example</Link>
            </nav>
        </>
    )
}