import React from 'react';

const Breadscrumb = (props) => {
    return (
        <div className="banner">
            <h2>
                <a>Home</a>
                <i className="fa fa-angle-right"></i>
                <span>{props.name}</span>
            </h2>
        </div>
    );
};

export default Breadscrumb;
