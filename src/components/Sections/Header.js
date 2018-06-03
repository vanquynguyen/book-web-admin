import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { database } from '../../constants/firebase';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            notifications: {},
        };
    }

    componentWillMount() {
        const notifications = database.ref('notifications')
    
        notifications.on('value', snapshot => {
            const items = snapshot.val();
            const newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    full_name: items[item].full_name,
                    content: items[item].content,
                    sender_id: items[item].sender_id,
                    received_id: items[item].received_id,
                    time: items[item].time
                });
            }
            this.setState({
                notifications: newState
            });
        });
    }

    onRemoveNoti = (id) => {
        database.ref('notifications').child(id).remove()
    }

    logout = () => {
        localStorage.setItem('checkAdmin', '')
        window.location = '/'
    }
    render() {
        const notiData = this.state.notifications;
        console.log(notiData)
        let listNoti;
        let count = 0;
        if (notiData.length > 0) {
            listNoti = notiData.map((noti, key) => {
                return  <div key={key}>
                            {(noti.received_id === 'admin') ? ( 
                                <div>
                                    {(typeof noti.content !== 'undefined' && noti.content === 'register') ? (
                                        <li>
                                            <Link to="/user-list" onClick={() => this.onRemoveNoti(noti.id)}>
                                                <div className="user-new">
                                                    <p>New user registered</p>
                                                    <span>{noti.time}</span>
                                                </div>
                                                <div className="user-new-left">
                                                    <i className="fa fa-user-plus"></i>
                                                </div>
                                                <div className="clearfix"> </div>
                                            </Link>
                                        </li>
                                    ) : (
                                        <div></div>
                                    )}
                                    {(typeof noti.content !== 'undefined' && noti.content === 'request_book') ? (
                                        <li>
                                            <Link to="/book-list" onClick={() => this.onRemoveNoti(noti.id)}>
                                                <div className="user-new">
                                                    <p>{noti.full_name} request a book</p>
                                                    <span>{noti.time}</span>
                                                </div>
                                                <div className="user-new-left">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="clearfix"> </div>
                                            </Link>
                                        </li>
                                    ) : (
                                        <div></div>
                                    )}
                                    <div style={{ display: 'none' }}>{count++}</div>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
            });
        }

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
                        <h1> <a className="navbar-brand" href="index.html">UTT BOOK</a></h1>
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
                                    <a className="dropdown-toggle dropdown-at " data-toggle="dropdown"><i className="fa fa-globe"></i> <span className="number">{count}</span></a>
                                    <ul className="dropdown-menu menu1" role="menu" style={{ padding: '10px' }}>
                                        {count > 0 ? (
                                            <div>{ listNoti }</div>
                                        ) : (
                                            <div>No notifications</div>
                                        )}
                                    </ul>
                                    {/* <ul className="dropdown-menu menu1 " role="menu">
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
                                    </ul> */}
                                </li>
                                <li className="dropdown">
                                    <a  className="dropdown-toggle dropdown-at" data-toggle="dropdown"><span className=" name-caret">Admin<i className="caret"></i></span><img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/31543260_971347233033286_3948911859586826240_n.jpg?_nc_cat=0&oh=cb24b512f5e1f1cdbda824c1d8dcf644&oe=5B8101B6" width="50" alt="" /></a>
                                    <ul className="dropdown-menu " role="menu">
                                        <li><a href="profile.html"><i className="fa fa-user"></i>Edit Profile</a></li>
                                        <li><a href="inbox.html"><i className="fa fa-envelope"></i>Inbox</a></li>
                                        <li><a href="calendar.html"><i className="fa fa-calendar"></i>Calender</a></li>
                                        <li><a onClick={this.logout}><i className="fa fa-sign-out"></i>Log out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </nav>
                <Navbar/>
            </div>
        );
    }
};

export default Header;