import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{paddingTop: '90px'}} >
           <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <Link to="/" className=" hvr-bounce-to-right">
                                <i className="fa fa-dashboard nav_icon "></i><span className="nav-label">Dashboards</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user-list" className=" hvr-bounce-to-right">
                                <i className="fa fa-user nav_icon"></i> <span className="nav-label">Manage User</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/category-list" className=" hvr-bounce-to-right">
                                <i className="fa fa-inbox nav_icon"></i> <span className="nav-label">Manage Categories</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/book-list" className=" hvr-bounce-to-right">
                                <i className="fa fa-book nav_icon"></i> <span className="nav-label">Manage Book</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
