import React, { Component } from 'react';
import Breadscrumb from '../../Sections/Breadcrumb';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { actAddUserRequest } from '../../../actions/Users';
import axios from 'axios';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

const email = (value) => {
    if (!isEmail(value)) {
        return <small className="form-text text-danger">Invalid email format</small>;
    }
}

const minLength = (value) => {
    if (value.trim().length < 6) {
        return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
    }
}

class UsersActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            avatar: '',
            email: '',
            password: '',
            address: '',
            gender: '',
            formError: ''
        };
        this.onChangeFile = this.onChangeFile.bind(this)
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            gender: this.refs.gender.value,
        })
       
    }

    onChangeFile = (e) => {
        e.preventDefault();
        this.setState({
            avatar: e.target.files[0]
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            var { full_name, avatar, email, password, address, gender } = this.state;
            var user = new FormData();
            user.append("avatar", avatar);
            user.append("full_name", full_name);
            user.append("email", email);
            user.append("password", password);
            user.append("address", address);
            user.append("gender", gender);

            axios.post('http://localhost:8000/api/v1/users', user).then(res => {
                if(res.data===403) {
                    swal("Email already exist!", "You clicked the button!", "warning");
                } else {
                    this.props.onAddUser(user);
                    swal("Good job!", "You clicked the button!", "success");
                    this.props.history.goBack();
                }
               
            });
    
        }
    }

    render() {

        return (
            <div>
                <Breadscrumb name="Add User" />
                <div className="container">
                    <div className="row">
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            <div style={{ height: 'auto' }}>
                                <legend>* Please complete infomation</legend>
                                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Full name: </label>
                                    <Input 
                                        name="full_name" 
                                        onChange={this.onChangeHandler}
                                        type="text" 
                                        className="form-control" 
                                        validations={[required]}
                                    />
                                </div>
                                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Avatar: </label>
                                    <input 
                                        name="avatar" 
                                        onChange={this.onChangeFile}
                                        type="file" 
                                        className="form-control" 
                                        // validations={[required]}
                                    />
                                </div>
                                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Email: </label>
                                    <Input 
                                        name="email" 
                                        onChange={this.onChangeHandler}
                                        type="text" 
                                        className="form-control" 
                                        validations={[required, email]}
                                    />
                                </div>
                                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Password: </label>
                                    <Input 
                                        name="password" 
                                        onChange={this.onChangeHandler}
                                        type="password" 
                                        className="form-control" 
                                        validations={[required, minLength]}
                                    />
                                </div>
                                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Address: </label>
                                    <Input 
                                        name="address" 
                                        onChange={this.onChangeHandler}
                                        type="text" 
                                        className="form-control" 
                                        validations={[required]}
                                    />
                                </div>
                                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Gender: </label>
                                    <select 
                                        ref="gender"
                                        name="gender" 
                                        onChange={this.onChangeHandler}
                                        className="form-control" 
                                        validations={[required]}
                                    >
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ marginTop: '30px' }}>
                                <Link to="/user-list" className="btn btn-danger mr-5">
                                    <i className="fa fa-arrow-left"></i> Return
                                </Link>
                                <button type="submit" className="btn btn-primary">
                                    <i className="fa fa-save"></i> Save
                                </button>
                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users : state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (user) => {
            dispatch(actAddUserRequest(user));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersActionPage);
