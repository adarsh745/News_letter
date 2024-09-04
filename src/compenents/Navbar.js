import React, { Component } from 'react'
import {Link} from "react-router-dom";



export class Navbar extends Component {
  
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              
            
              <Link className="navbar-brand" to="/"><h3>News App</h3></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item"><Link className="nav-link" to="/">About</Link>
                      </li>
                      <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/ports">Sports</Link></li>       
                             
                </ul>  
                <div className="k">
               <img type="button"  src="https://i.imghippo.com/files/UK7Dt1722246559.jpg" alt="Avatar" className="avatar"/>
             </div>
              </div>  
  </div>
</nav>
{/* <div className="container ">
      <h1 >News App</h1>
      <img src="https://media.istockphoto.com/id/1351440359/vector/megaphone-with-breaking-news-speech-bubble-banner-loudspeaker-label-for-business-marketing.jpg?s=1024x1024&w=is&k=20&c=9BnnA1oWUvwBLu2edVVVIDuFotjRD_DmOlz8V_HJUrI=" height="200" width="300px"class="rounded mx-auto d-block" alt="..."></img>
    </div>
         */}
      </div>
      
    )
  }
}

export default Navbar
