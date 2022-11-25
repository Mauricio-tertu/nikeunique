import './home.css'
import img from '../Home/assets/nike.logo.png'
import videoBg from '../Home/assets/Nike video.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home(){
    return(
        <div className='container '>
            
<div class="w-auto position-relative fixed">
             <video src={videoBg} autoPlay loop muted />
               </div>

        <nav class="navbar navbar-expand-lg bg-light w-100  rounded-3 rounded position-absolute ">
  <div class="container-fluid mx-auto">
   <img  src={img}  /> 
   <h3>NIKE <h6>UNIQUE</h6><a href="http://localhost:3000/login" >   
          <button  type="button" class="btn btn-outline-dark mx-auto">OPEN</button>
          </a></h3>
   
   
   
          </div>
</nav>


</div>

           
    )
}