import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header">
           <nav className="navbar-default navbar-static-top">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <h1> <a className="navbar-brand" href="index.html">Minimal</a></h1>
                </div>
                <div className=" border-bottom">
                    <div className="full-left">
                        <section className="full-top">
                            <button id="toggle"><i className="fa fa-arrows-alt"></i></button>	
                        </section>
                        <form className=" navbar-left-right">
                            <input type="text" />
                            <input type="submit" className="fa fa-search" />
                        </form>
                        <div className="clearfix"> </div>
                    </div>
        
                    <div className="drop-men">
                        <ul className=" nav_1">
                            <li className="dropdown at-drop">
                                <a className="dropdown-toggle dropdown-at " data-toggle="dropdown"><i className="fa fa-globe"></i> <span className="number">5</span></a>
                                <ul className="dropdown-menu menu1 " role="menu">
                                    <li>
                                        <a >
                                            <div className="user-new">
                                                <p>New user registered</p>
                                                <span>40 seconds ago</span>
                                            </div>
                                            <div className="user-new-left">
                                                <i className="fa fa-user-plus"></i>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                            <div className="user-new">
                                                <p>Someone special liked this</p>
                                                <span>3 minutes ago</span>
                                            </div>
                                            <div className="user-new-left">
                                                <i className="fa fa-heart"></i>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                            <div className="user-new">
                                                <p>John cancelled the event</p>
                                                <span>4 hours ago</span>
                                            </div>
                                            <div className="user-new-left">
                                                <i className="fa fa-times"></i>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                            <div className="user-new">
                                                <p>The server is status is stable</p>
                                                <span>yesterday at 08:30am</span>
                                            </div>
                                            <div className="user-new-left">
                                                <i className="fa fa-info"></i>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                            <div className="user-new">
                                                <p>New comments waiting approval</p>
                                                <span>Last Week</span>
                                            </div>
                                            <div className="user-new-left">
                                                <i className="fa fa-rss"></i>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </a>
                                    </li>
                                    <li><a  className="view">View all messages</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a  className="dropdown-toggle dropdown-at" data-toggle="dropdown"><span className=" name-caret">Rackham<i className="caret"></i></span><img src="images/wo.jpg" alt="" /></a>
                                <ul className="dropdown-menu " role="menu">
                                    <li><a href="profile.html"><i className="fa fa-user"></i>Edit Profile</a></li>
                                    <li><a href="inbox.html"><i className="fa fa-envelope"></i>Inbox</a></li>
                                    <li><a href="calendar.html"><i className="fa fa-calendar"></i>Calender</a></li>
                                    <li><a href="inbox.html"><i className="fa fa-clipboard"></i>Tasks</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
            <Navbar/>
        </div>
        
    );
};

export default Header;