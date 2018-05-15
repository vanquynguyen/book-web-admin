import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

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

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            emailExist: ''
        };
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
       
    }
    onSubmit(e){
        e.preventDefault();
        this.form.validateAll();
       
        if ( this.checkBtn.context._errors.length === 0 ) {
            if ( this.state.email === 'admin@gmail.com' && this.state.password === '123456' ) {
                localStorage.setItem('checkAdmin', true);
                window.location = '/';  
            } else {
                this.setState({
                    emailExist: false
                })
            }
        }
         
    }

    render() {
        const checkRequest = () => {
            if (this.state.emailExist === false) {
                return <small className="form-text text-danger">invalid_email_or_password</small>;
            }
        }
        return (
            <div>
                <div className="login">
                    <h1><a href="index.html">UTT Book </a></h1>
                    <div className="login-bottom">
                        <h2>Login</h2>
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            <div className="col-md-12">
                                <div className="login-mail">
                                    <Input 
                                        name="email" 
                                        onChange={this.onChangeHandler}
                                        ref="email"
                                        type="text" 
                                        placeholder="Email"
                                        className="form-control" 
                                        style={{width: '100%'}}
                                        validations={[required, email]}
                                    />
                                </div>
                                <div className="login-mail">
                                    <Input 
                                        name="password" 
                                        onChange={this.onChangeHandler}
                                        type="password" 
                                        ref="password"
                                        placeholder="Password"
                                        className="form-control" 
                                        style={{width: '100%'}}
                                        validations={[required, minLength, checkRequest]}
                                    />
                                </div>
                                <a className="news-letter ">
                                <label className="checkbox1"><input type="checkbox" name="checkbox" /><i> </i>Forget Password</label>
                                </a>
                            </div>
                            <div className="col-md-12 login-do">
                                <label className="hvr-shutter-in-horizontal login-sub">
                                    <input type="submit" value="login" />
                                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                </label>
                            </div>
                            <div className="clearfix"> </div>
                        </Form>
                    </div>
                </div>
                <div className="copy-right">
                    <p> &copy; 2018 UTT. All Rights Reserved | Design by <a href="http://book-utt.herokuapp.com/" >Quy Nguyen</a> </p>
                </div>
            </div>
        )
    }
}

export default Login;
