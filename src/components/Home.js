import React from 'react';
import Breadscrumb from './Sections/Breadcrumb';

const Home = (props) => {
    return (
        <div className="home">
            <Breadscrumb name="Dashboard"/>
            <div className="content-top">
                <div className="col-md-4 ">
                    <div className="content-top-1">
                        <div className="col-md-6 top-content">
                            <h5>User</h5>
                            <label>2</label>
                        </div>
                        <div className="col-md-6 top-content1">
                            <div id="demo-pie-1" className="pie-title-center" data-percent="25">
                                <span className="pie-value">25%</span> 
                                <canvas height="100" width="100"></canvas>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="content-top-1">
                        <div className="col-md-6 top-content">
                            <h5>Books</h5>
                            <label>5</label>
                        </div>
                        <div className="col-md-6 top-content1">
                            <div id="demo-pie-2" className="pie-title-center" data-percent="50">
                                <span className="pie-value">50%</span> 
                                <canvas height="100" width="100"></canvas>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="content-top-1">
                        <div className="col-md-6 top-content">
                            <h5>Bills</h5>
                            <label>10</label>
                        </div>
                        <div className="col-md-6 top-content1">
                            <div id="demo-pie-3" className="pie-title-center" data-percent="75">
                                <span className="pie-value">75%</span> 
                                <canvas height="100" width="100"></canvas>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="col-md-8 content-top-2">
                    <div className="content-graph">
                        <div className="content-color">
                            <div className="content-ch">
                                <p><i></i>Chrome </p>
                                <span>100%</span>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="content-ch1">
                                <p><i></i>Safari</p>
                                <span> 50%</span>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
};

export default Home;