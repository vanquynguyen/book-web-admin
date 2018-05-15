import React, { Component } from 'react';
import '../../Pagination/style.css';

import Breadscrumb from '../../Sections/Breadcrumb';
import List from '../../Pagination/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UsersList from '../UsersList';
import UsersItem from '../UsersItem';
import { actFetchUsersRequest, actApproveUserRequest, searchUserRequest, actDeleteUserRequest } from '../../../actions/Users';

class UsersListPage extends Component {
    
    constructor() {
        super();
        this.state = {
            users: [],
            currentPage: 1,
            PerPage: 5,
            class: 'default'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllUsers();
    }

    handleClick(id) {
        if (id===1) {
            this.setState({
                currentPage: Number(id),
                activeItem: id,
                class: 'default'
            });
        } else {
            this.setState({
                currentPage: Number(id),
                activeItem: id,
                class: ''
            });
        }
      
    }

    handleFilterList = (event) => {
        this.setState({
            PerPage: event.target.value
        })
    }

    showUsers(users) {
        const {currentPage, PerPage } = this.state;
        const indexOfLastTodo = currentPage * PerPage;
        const indexOfFirstTodo = indexOfLastTodo - PerPage;
        const currentUsers = this.props.users.slice(indexOfFirstTodo, indexOfLastTodo);

        var result = null;
        var { onDeleteUser } = this.props;
        if (currentUsers.length > 0) {
            result = currentUsers.map((user, index) => {
                return <UsersItem user={user} key={index} index={index} onDeleteUser={onDeleteUser} />
            });
        }

        return result;
    }

    onSearch = (event) => {
        this.props.onSearchUser(event.target.value);
    }

    render() {
        var { users } = this.props;
        const { PerPage, activeItem } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / PerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number =>
            <List handleClick={this.handleClick} id={number} key={number} isActive={activeItem === number} default={this.state.class} />
        );
        
        return (
            <div>
                <Breadscrumb name="Manage User"/>
                <div className="content-top">
                    <div className="grid-form">
                        <h3 className="panel-title">Users List</h3>
                        <br />
                        <Link to="/User/add">
                            <button className="btn btn-primary"><i className="fa fa-plus"> Add User</i></button>
                        </Link>
                        <div className="row" style={{ paddingTop: '25px' }}>
                        <div className="col-md-6">
                            <span style={{ float: 'left' }}>Show:</span>
                            <select className="form-control filter-box" onChange={this.handleFilterList}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-4">
                                <span style={{ float: 'right' }}>Search:</span>
                            </div>
                            <div className="col-md-8">
                                <span><input type="text" className="form-control search-form" onChange={this.onSearch}/></span>
                            </div>
                        </div>
                    </div>
                        <UsersList>
                            {this.showUsers(users)}
                        </UsersList>
                        <ul className="pagination">
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(actFetchUsersRequest());
        },
        
        onSearchUser: (keywork) => {
            dispatch(searchUserRequest(keywork))
        },

        onApproveUser: (id) => {
            dispatch(actApproveUserRequest(id));
        },
        
        onDeleteUser: (id) => {
            dispatch(actDeleteUserRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
