import './admin.css'
import img from './img/nike.logo.png'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';



export default function Admin(){
    return(
        <div className="container" >

<nav class="navbar navbar-expand-lg bg-light w-100 gap-3 br-3 rounded-3  ">
  <div class="container-fluid">
   <img  src={img}  /> 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto gap-3 mb-0  ">
          <h3>NIKE</h3><h6>UNIQUE</h6>
          
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=".">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="."> Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="."> News</a>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
<div class="card-group mt-4 rounded-5 gap-3">
  <div class="card rounded-5">
    <img src={img1}  class="card-img-top w-100" alt="..."/>
    <div class="card-body">
      <h5 class="card-title mt-4 fw-bold ">Nike Air Mag Back to the Future</h5>
      <p class="card-text">The classic movie “Back to the Future 2” (1989) featured a Nike sneaker that had self-lacing technology..</p>
      <p class="card-text"><small class="fw-bold">PRICE $14500</small></p>
    </div>
  </div>
  <div class="card rounded-5">
    <img src={img2} class="card-img-top w-100" alt="..."/>
    <div class="card-body">
      <h5 class="card-title fw-bold m-100 ">Nike Air Foamposite One All-Star 2024
</h5>
      <p class="card-text">While the global pandemic has delayed the 2021 NBA All-Star Weekend in February, this exclusive Nike Air Foamposite One “All-Star 2023”</p>
      <p class="card-text"><small class="fw-bold">PRICE $12000</small></p>
    </div>
  </div>
  <div class="card rounded-5">
    <img src={img3} class="card-img-top w-100 " alt="..."/>
    <div class="card-body">
      <h5 class="card-title mt-0 fw-bold m-100">Nike GO FlyEase </h5>
      <p class="card-text">Tollowing an abundance of different colorways – including the “Sea Foam” version – Nike’s GO FlyEase is now returning in a fresh black and white iteration..</p>
      <p class="card-text"><small class="fw-bold">PRICE $2750</small></p>
    </div>
  </div>
</div>

        


         </div>

         
  
    )
    
}

