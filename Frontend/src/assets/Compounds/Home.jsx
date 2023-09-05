import Qutrix_logo from '../Images/GAIT_logo.jpg'
import clg_logo from '../Images/Office.png'
import '../Compounds/Home.css'
import {Link} from 'react-router-dom'
const home = () => {
  return (
    <div>
        <header className="header">
            <img src={clg_logo} width={'200px'} alt='Logo'/>
            <nav className="navbar">
              <h1>Gobi Arts & Science College</h1>
            </nav>
        </header>
        <div className="background"></div>
        <div className="container">
            <div className="item">   
                <div className="text-item">
                    <h2 className="logo"><img src={Qutrix_logo} width={'200px'} alt='Logo'/>
                        Welcome! <br /><span>
                        To Qutrix 2K23
                     </span>
                    </h2>
                    <p>ALONG THE SHORED OF CYBERSPACE</p>
                </div>
            </div>
            <div className="btn-section">
                <div className="btns">
                 <button className="btn1"><Link to="/Register">Register Here</Link></button>
                 <button className="btn2"><Link to="/Details">View Details</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default home