import React from 'react'
import './NavbarCss.css'
/*<script>
const hamburger = document.querySelector(".hamburger");
const Navbar = document.querySelector(".Navbar");
hamburger.addEventListner("click", ()=>{
    hamburger.classNameList.toggle("active");

    Navbar.classNameList.toggle("active");
})
</script> */
import {Link} from 'react-router-dom';
import { getToken } from '../Serve/LocalStorageService';
import logo from '../Images/logo.png'
const Navbar = () =>{
    const {access_token} = getToken();
    return (
        <div>

            <header>
                <div className="nav_logo">
                <a href="/" > <img src={logo} alt="..." height={100} width={200} /></a>
                </div>
                <input type="checkbox" id="menu-bar"/>
                    <label htmlFor="menu-bar">Menu</label>
                    <nav>
                        <ul>
                            <li> <Link to="/" className="active">Home</Link> </li>
                            <li><a href="/">Nepal</a>
                                <ul>
                                    <li><a href="/">Nepal Trekking</a>
                                        <ul>
                                            <li><Link to="/Everest" className="active">Everest</Link> </li>
                                            <li><Link to="/Annapurna" className="active">Annapurna</Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="/" className="active">Kathmandu</a></li>
                                    <li><a href="/" className="active">Pokhara</a>
                                        <ul>
                                            <li><a href="/" className="active">Fewatal</a></li>
                                            <li><a href="/" className="active">Rupa Taal</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">India</a>
                            </li>
                            <li>
                                <a href="/">Bhutan</a>
                            </li>
                            <li>
                                
                                <a href="/">China</a>
                            </li>
                            <li>
                                { access_token ? <Link to="./dashboard"><button>Dashboard</button></Link> : <Link to="login"><button>LOGIN</button></Link>}
                                
                            </li>
                           
                        </ul>

                    </nav>
            </header>

        </div >
    )
};
export default Navbar;

