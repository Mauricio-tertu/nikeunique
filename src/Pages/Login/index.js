import {useState} from "react"
import './login.css'

import {Logo} from '../../components/Logo'

import { auth } from '../../Services/firebaseConnetion'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast }  from 'react-toastify'

export default function Login(){
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

function handleLogin(e){
    e.preventDefault();

    if (email === ''  || password === ''){
        alert("preencher os dados corretamente!")
        return;
    }
    
   signInWithEmailAndPassword(auth, email, password)
   .then(() => {
    toast.success('Bem vindo de volta 😜​')
   navigate("/admin" , {replace: true} )
   })
   .catch(() => {
    toast.error('ERROR LOGIN NOT FOUND 🤬​')
    console.log("ERROR AO FAZER LOGIN")
   })
}



    return(
        <div className='login-container' >
            <Logo/>
          
          <form className='form' onSubmit={handleLogin} >
            <input
            type="email"
            placeholder='write your email here'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            />

           <input
            type="password"
            placeholder='*********'
            outoComplete="on"
            value={password} 
            onChange={ (e) => setPassword(e.target.value) }
            />
 
            <button type='submite'>Login</button>
<br/>
            <a className="link" href="http://localhost:3000/" >create a new account ?
            </a>

           
          </form>
        </div>
    )
}