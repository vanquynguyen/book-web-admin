import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import { searchProductRequest, filterProductRequest } from '../../actions/index';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: []
        };
    }
 
    onSearch = (event) => {
        this.props.onSearchProduct(event.target.value);
    }

    handleFilter = (event) => {
        this.props.onFilterProduct(event.target.value);
    }

    handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" style={{ width: "40%" }} onChange={this.onSearch}/>
                    </div>
                    <div className="col-md-6">
                        <select className="form-control" style={{ float: 'right', width: '30%', }} onChange={this.handleFilter}>
                            <option value="" defaultValue="selected">Trạng thái</option>
                            <option value="1">Còn hàng</option>
                            <option value="0">Hết Hàng</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã SP</th>
                                    <th>Tên</th>
                                    <th>Mô Tả</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={450}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            />
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchProduct: (keywork) => {
            dispatch(searchProductRequest(keywork))
        },
        
        onFilterProduct: (value) => {
            dispatch(filterProductRequest(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
