import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar cyan">
            <div className="container">
                <span className="navbar-brand white-text fs-1 mb-4">Tasks</span>
                <ul className="mb-2">
                    <li className="nav-item"> <NavLink to="/" className="nav-link">Home</NavLink> </li>
                    <li className="nav-item"> <NavLink to="/about" className="nav-link">About</NavLink> </li>
                    <li className="nav-item"> <NavLink to="/contact" className="nav-link">Contact</NavLink> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar