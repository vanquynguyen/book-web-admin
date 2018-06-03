import React, { Component } from 'react';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import { actApproveUserRequest } from '../../../actions/Users';

class UsersItem extends Component {

    onApprove = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willApprove) => {
            if (willApprove) {
                this.props.onApproveUser(id);
                swal("Poof! Your imaginary file has been deleted!", {
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
                this.props.onDeleteUser(id);
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    render() {
        var { user, index } = this.props;
        var statusName = user.status ? 'Approved' : 'Inprogress';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.full_name}</td>
                <td>{statusName}</td>
                <td>
                    {user.status===0 ? (
                        <button type="button" className="btn btn-info mr-5" onClick={() => this.onApprove(user.id)} >
                            <i className="fa fa-edit"></i> Approve
                        </button>
                    ) : (
                        <button className="btn btn-success mr-5" disabled>
                            <i className="fa fa-edit"></i> Approved
                        </button>
                    )}
                    <button type="button" className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => this.onDelete(user.id)}>
                        <i className="fa fa-trash-o"></i> Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onApproveUser: (id) => {
            dispatch(actApproveUserRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersItem);
