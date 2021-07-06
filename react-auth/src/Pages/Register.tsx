import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async(e:SyntheticEvent)=>{
        e.preventDefault()
        
        await fetch(input: 'http://localhost:8000/api/register', init:{
            method:'POST',
            headers: {'Content-Type':'application/json'}
            body: JSON.stringify(value:{
                name,
                email,
                password
            })
        })
        setRedirect(true)
    }

    if(redirect){
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                    <input type="email" className="form-control" placeholder="Name"
                            onChange={e=>setName(e.target.value)}
                    />
                    <input type="email" className="form-control" placeholder="Email"
                            onChange={e=>setEmail(e.target.value)}
                    />
                    <input type="password" className="form-control" placeholder="Password"
                            onChange={e=>setPassword(e.target.value)}
                    />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;