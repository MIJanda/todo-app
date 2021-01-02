const Navbar = () => {
    return (
        <nav className="navbar cyan">
            <div className="container">
                <span className="navbar-brand white-text fs-1">Tasks</span>
                <ul>
                    <li className="nav-item"> <a href="/" className="nav-link">Home</a> </li>
                    <li className="nav-item"> <a href="/about" className="nav-link">About</a> </li>
                    <li className="nav-item"> <a href="/contact" className="nav-link">Contact</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar