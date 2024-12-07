import React, { useContext, useState } from 'react'
import UserContext from '../../context/userContext';
import '../css/login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password}); 
    }

  return (
    <div className='login-div'>
        <label>Username</label>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
        <label>Password</label>
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login