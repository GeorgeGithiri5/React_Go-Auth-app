import React, { SyntheticEvent, useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit =async(e:SyntheticEvent)=>{
        e.preventDefault()
        
        await fetch(input: 'http://localhost:8000/api/login', init:{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credential:'include',
            body: JSON.stringify(value:{
                email,
                password
            })
        })
        setRedirect(true)
    }
    if(redirect){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email"
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={e=>setPassword(e.target.value)}
                    />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default Login;