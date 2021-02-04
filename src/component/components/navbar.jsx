import { Link } from "react-router-dom";

const menus = [
    {label: "Products", path: "/products"},
    {label: "About", path: "/about"},
    {label: "Admin", path: "/admin"},
]
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
        <Link to="/home" className="navbar-brand">
        LOGO
        </Link>
        <ul className="nav">
            {menus.map(({label,path}) =>(<li className="nav-item">
                <Link to={path} className="nav-link">{label}</Link>
            </li>))}
        </ul>
    </nav>
    );
};

export default Navbar;
