import React from 'react';

class List extends React.Component {
    handleClick = e => {
        const { id, handleClick } = this.props;
        handleClick(id);
    };
  
    render() {
        const { isActive, id } = this.props;
        const groupItemClass = `${isActive && "activePagination"}`;
        return (
            <li
                className={ id===1?this.props.default : groupItemClass }
                onClick={this.handleClick}
            >
                {id}
            </li>
        );
    }
  }

export default List;
