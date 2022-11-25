import './logo.css'
import { Link } from 'react-router-dom'


export function Logo(){
    return(
        <Link  to={'/'} >
        <h1  className='logo'>NIKE<span className='logo-text'>UNIQUE</span> </h1>
        </Link>
    )
}