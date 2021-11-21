import React from 'react'
import {Link} from 'react-router-dom';
function RoutesPage() {
    return (
        <div className='routesMainPage'>
            <Link to='/ghumo'>Ghumo Page</Link>
            <br/>
            <Link to='/trillo'>Trillo Page</Link>
            <br/>
            <Link to='/nexter'>Nexter Page</Link>
        </div>
    )
}

export default RoutesPage;
