import React, { Component } from 'react';
import '../../Pagination/style.css';

import Breadscrumb from '../../Sections/Breadcrumb';
import List from '../../Pagination/index';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BooksList from '../BooksList';
import BooksItem from '../BooksItem';
import { actFetchBooksRequest, actApproveBookRequest, searchBooksRequest, actDeleteBookRequest } from '../../../actions/Books';

class BooksListPage extends Component {
    
    constructor() {
        super();
        this.state = {
            books: [],
            currentPage: 1,
            PerPage: 5,
            class: 'default'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllBooks();
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

    showBooks(books) {
        const {currentPage, PerPage } = this.state;
        const indexOfLastTodo = currentPage * PerPage;
        const indexOfFirstTodo = indexOfLastTodo - PerPage;
        const currentBooks = this.props.books.slice(indexOfFirstTodo, indexOfLastTodo);

        var result = null;
        var { onDeleteBook } = this.props;
        if (currentBooks.length > 0) {
            result = currentBooks.map((book, index) => {
                return <BooksItem book={book} key={index} index={index} onDeleteBook={onDeleteBook} />
            });
        }

        return result;
    }

    onSearch = (event) => {
        this.props.onSearchBook(event.target.value);
    }

    render() {
        var { books } = this.props;
        const { PerPage, activeItem } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(books.length / PerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number =>
            <List handleClick={this.handleClick} id={number} key={number} isActive={activeItem === number} default={this.state.class} />
        );
        
        return (
            <div>
                <Breadscrumb name="Manage Book"/>
                <div className="content-top">
                    <div className="grid-form">
                        <h3 className="panel-title">Books List</h3>
                        <br />
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
                        <BooksList>
                            {this.showBooks(books)}
                        </BooksList>
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
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBooks: () => {
            dispatch(actFetchBooksRequest());
        },
        
        onSearchBook: (keywork) => {
            dispatch(searchBooksRequest(keywork))
        },

        onApproveBook: (id) => {
            dispatch(actApproveBookRequest(id));
        },
        
        onDeleteBook: (id) => {
            dispatch(actDeleteBookRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksListPage);
