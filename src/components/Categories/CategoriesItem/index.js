import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class CategoriesItem extends Component {

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
                this.props.onDeleteCategory(id);
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    render() {
        var { category, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                    <Link to={`/category/${category.id}/edit`} className="btn btn-info mr-5">
                        <i className="fa fa-edit"></i> Edit
                    </Link>
                    <button type="button" className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => this.onDelete(category.id)}>
                        <i className="fa fa-trash-o"></i> Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default CategoriesItem;
