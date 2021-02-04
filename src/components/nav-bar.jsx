import { Component} from 'react';
import { Link } from "react-router-dom";
import "../style/nav-bar.css";

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="nav navbar bg-info">
                <ul className="nav ">
                    <li className="nav-link ">
                        <Link className = "menu" to = "/">Home</Link>
                    </li>
                    <li className="nav-link ">
                        <Link className = "menu" to = "/products">Products</Link>
                    </li>
                    <li className="nav-link ">
                        <Link className = "menu" to = "/sign-up">Sign up</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;