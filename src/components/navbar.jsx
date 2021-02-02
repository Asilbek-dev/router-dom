import { Component} from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
    render() { 
        return ( 
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        );
    }
}

export default Navbar;