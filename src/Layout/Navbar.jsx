import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbarSection">
                <div className="container">
                    <Link className="navbar-brand" to="/">Niharika Kanda
                    </Link>
                    <button className="navbar-toggler " style={{ background: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <NavLink className="nav-link" activeClassName="active-link" to="/"
                                style={({ isActive }) => (isActive ? { color: '#BB2D3B', fontWeight: 'bold' } : {})}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                activeClassName="active-link"
                                to="/service"
                                style={({ isActive }) => (isActive ? { color: '#BB2D3B', fontWeight: 'bold' } : {})}
                            >
                                Service
                            </NavLink>
                            {/* <NavLink
                                className="nav-link"
                                activeClassName="active-link"
                                to="/myproject"
                                style={({ isActive }) => (isActive ? { color: '#BB2D3B', fontWeight: 'bold' } : {})}
                            >
                                My Projects
                            </NavLink> */}
                            <NavLink
                                className="nav-link"
                                activeClassName="active-link"
                                to="/aboutme"
                                style={({ isActive }) => (isActive ? { color: '#BB2D3B', fontWeight: 'bold' } : {})}
                            >
                                About Me
                            </NavLink>



                        </ul>
                        <div>
                            {/* <Link to="https://drive.google.com/uc?export=download&id=1qE32sIDlez1uiWtY71SU-4tqyxlDCfCO" className="btn btn-danger" download>
                                Download CV
                            </Link> */}
                        </div>
                        <div>
                            <Link target='_blank' to='https://www.linkedin.com/in/niharika-kanda-5a8a45275/'><i class="fa-brands fa-linkedin mx-3 fs-3 mb-2 text-white"></i></Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar