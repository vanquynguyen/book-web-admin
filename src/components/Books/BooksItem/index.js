import React, { Component } from 'react';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import { actApproveBookRequest } from '../../../actions/Books';
import { database } from '../../../constants/firebase';

class BooksItem extends Component {

    onApprove = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once approved, you will not be approve!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willApprove) => {
            if (willApprove) {
                this.props.onApproveBook(id);
                const time = new Date().toLocaleDateString();
                database.ref('notifications').push({
                    approved: 'true',
                    sender_id: 'admin',
                    received_id: this.props.book.user_id + '',
                    time: time
                });
                swal("Poof! Your imaginary file has been approved!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

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
                this.props.onDeleteBook(id);
                const time = new Date().toLocaleDateString();
                database.ref('notifications').push({
                    deleted: 'true',
                    sender_id: 'admin',
                    received_id: this.props.book.user_id + '',
                    time: time
                });
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    render() {
        var { book, index } = this.props;
        var statusName = book.status ? 'Approved' : 'Inprogress';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{statusName}</td>
                <td>
                    {book.status===0 ? (
                        <button type="button" className="btn btn-info mr-5" onClick={() => this.onApprove(book.id)} >
                            <i className="fa fa-edit"></i> Approve
                        </button>
                    ) : (
                        <button className="btn btn-success mr-5" disabled>
                            <i className="fa fa-edit"></i> Approved
                        </button>
                    )}
                    <button type="button" className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => this.onDelete(book.id)}>
                        <i className="fa fa-trash-o"></i> Delete
                    </button>
                </td>
            </tr>
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
        onApproveBook: (id) => {
            dispatch(actApproveBookRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksItem);
