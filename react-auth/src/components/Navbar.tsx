import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props:{name:string}) => {

    const logout = async()=>{
        await fetch(input: 'http://localhost:8000/api/logout', init:{
            method:'POST',
            headers: {'Content-Type':'application/json'}
            credentials:'include '
        })
    }

    let menu;

    if(props.name===''){
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" href="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
                </li>
            </ul>
        )
    }else{
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" href="/login" onClick={}>Log out</Link>
                </li>
            </ul>
        )
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {menu}
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;