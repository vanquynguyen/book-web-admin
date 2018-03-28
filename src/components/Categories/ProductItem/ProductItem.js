import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class ProductItem extends Component {

    onDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                this.props.onDeleteProduct(id);
                
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'success' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}đ</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-info mr-5">
                        <i className="glyphicon glyphicon-edit"></i> Sửa
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>
                        <i className="glyphicon glyphicon-trash"></i> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
