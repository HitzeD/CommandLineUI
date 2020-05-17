import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-main">

            <div className="title">

                <h1 className="main">CLI Helper</h1>

            </div>

            <div className="item-list">

                <ul className="menu">

                    <NavLink className="item" activeClassName="activeNav" exact to="/">Home</NavLink> {/* create active and reg class in SCSS */}

                    <NavLink className="item" activeClassName="activeNav" to="/about">About</NavLink>

                </ul>

            </div>

        </div>
    )
}

export default Navbar;