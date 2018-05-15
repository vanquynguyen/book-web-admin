import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Header from './components/Sections/Header';
import Footer from './components/Sections/Footer';
import Login from './components/Login/login';

class App extends Component {
    constructor() {
        super();
        this.state = {
            admin: '',
        };
    }

    componentWillMount() {
        let admin = localStorage.getItem('checkAdmin');
        this.setState({
            admin: admin
        })
    }

    render() {
        const check = this.state.admin;
        console.log(check)
        return (
            <div>
                { check === '' ? (
                    <Login />
                ) : (
                    <Router>
                        <div className="App">
                            <Header />
                            <div id="page-wrapper" className="gray-bg dashbard-1">
                                <div className="content-main">
                                    {this.showContentMenus(routes)}
                                </div>
                            </div>  
                            <Footer />
                        </div>
                    </Router>
                )}
            </div>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
