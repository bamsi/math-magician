import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </nav>
    )
}

export default Navbar;