import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <ul>
                        <li>
                        <NavLink to="/homebase" onClick={() => navigate("/home")}>Home Base</NavLink>
                        </li>
                        <li>
                            <NavLink to="/retrievedata" onClick={() => navigate("/dashboard")}>Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;