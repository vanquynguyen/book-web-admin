import React from 'react';

const Navbar = () => {
    return (
        <div style={{paddingTop: '90px'}} >
           <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="index.html" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon "></i><span className="nav-label">Dashboards</span> </a>
                        </li>
                        <li>
                            <a  className=" hvr-bounce-to-right"><i className="fa fa-indent nav_icon"></i> <span className="nav-label">Menu Levels</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="graphs.html" className=" hvr-bounce-to-right"> <i className="fa fa-area-chart nav_icon"></i>Graphs</a></li>
                                <li><a href="maps.html" className=" hvr-bounce-to-right"><i className="fa fa-map-marker nav_icon"></i>Maps</a></li>
                                <li><a href="typography.html" className=" hvr-bounce-to-right"><i className="fa fa-file-text-o nav_icon"></i>Typography</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className=" hvr-bounce-to-right"><i className="fa fa-inbox nav_icon"></i> <span className="nav-label">Inbox</span> </a>
                        </li>
                        <li>
                            <a className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Gallery</span> </a>
                        </li>
                        <li>
                            <a  className=" hvr-bounce-to-right"><i className="fa fa-desktop nav_icon"></i> <span className="nav-label">Pages</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a className=" hvr-bounce-to-right"> <i className="fa fa-info-circle nav_icon"></i>Error 404</a></li>
                                <li><a className=" hvr-bounce-to-right"><i className="fa fa-question-circle nav_icon"></i>FAQ</a></li>
                                <li><a className=" hvr-bounce-to-right"><i className="fa fa-file-o nav_icon"></i>Blank</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="layout.html" className=" hvr-bounce-to-right"><i className="fa fa-th nav_icon"></i> <span className="nav-label">Grid Layouts</span> </a>
                        </li>
                        <li>
                            <a  className=" hvr-bounce-to-right"><i className="fa fa-list nav_icon"></i> <span className="nav-label">Forms</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="forms.html" className=" hvr-bounce-to-right"><i className="fa fa-align-left nav_icon"></i>Basic forms</a></li>
                                <li><a href="validation.html" className=" hvr-bounce-to-right"><i className="fa fa-check-square-o nav_icon"></i>Validation</a></li>
                            </ul>
                        </li>
                        <li>
                            <a  className=" hvr-bounce-to-right"><i className="fa fa-cog nav_icon"></i> <span className="nav-label">Settings</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="signin.html" className=" hvr-bounce-to-right"><i className="fa fa-sign-in nav_icon"></i>Signin</a></li>
                                <li><a href="signup.html" className=" hvr-bounce-to-right"><i className="fa fa-sign-in nav_icon"></i>Singup</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;