import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink exact className="navbar-brand" to="/">Harsh</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact className={(navData) => (navData.isActive ? "manu_active" : 'none')} aria-current="page" to="/"><span className='nav-link'>Home</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact className={(navData) => (navData.isActive ? "manu_active" : 'none')} to="/service"><span className='nav-link'>Service</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact className={(navData) => (navData.isActive ? "manu_active" : 'none')} to="/about"><span className='nav-link'>About</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact className={(navData) => (navData.isActive ? "manu_active" : 'none')} to="/contect"><span className='nav-link'>Contect</span></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar