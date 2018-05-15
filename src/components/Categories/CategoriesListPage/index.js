import React, { Component } from 'react';
import '../../Pagination/style.css';

import Breadscrumb from '../../Sections/Breadcrumb';
import List from '../../Pagination/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoriesList from '../CategoriesList';
import CategoriesItem from '../CategoriesItem';
import { actFetchCategoriesRequest, searchCategoryRequest, actDeleteCategoryRequest } from '../../../actions/Categories';

class CategoriesListPage extends Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            currentPage: 1,
            PerPage: 5,
            class: 'default'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllCategories();
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

    showCategories(categories) {
        const {currentPage, PerPage } = this.state;
        const indexOfLastTodo = currentPage * PerPage;
        const indexOfFirstTodo = indexOfLastTodo - PerPage;
        const currentCategories = this.props.categories.slice(indexOfFirstTodo, indexOfLastTodo);

        var result = null;
        var { onDeleteCategory } = this.props;
        if (currentCategories.length > 0) {
            result = currentCategories.map((category, index) => {
                return <CategoriesItem category={category} key={index} index={index} onDeleteCategory={onDeleteCategory} />
            });
        }

        return result;
    }

    onSearch = (event) => {
        this.props.onSearchCategory(event.target.value);
    }

    render() {
        var { categories } = this.props;
        const { PerPage, activeItem } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(categories.length / PerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number =>
            <List handleClick={this.handleClick} id={number} key={number} isActive={activeItem === number} default={this.state.class} />
        );
        
        return (
            <div>
                <Breadscrumb name="Manage Category"/>
                <div className="content-top">
                    <div className="grid-form">
                        <h3 className="panel-title">Categories List</h3>
                        <br />
                        <Link to="/category/add">
                            <button className="btn btn-primary"><i className="fa fa-plus"> Add Category</i></button>
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
                        <CategoriesList>
                            {this.showCategories(categories)}
                        </CategoriesList>
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
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest());
        },
        
        onSearchCategory: (keywork) => {
            dispatch(searchCategoryRequest(keywork))
        },
        
        onDeleteCategory: (id) => {
            dispatch(actDeleteCategoryRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListPage);
