import React, { Component } from 'react';
import Breadscrumb from '../../Sections/Breadcrumb';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { actAddCategoryRequest, actFetchCategoriesRequest, actUpdateCategoryRequest, actGetCategoryRequest } from '../../../actions/Categories';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

class CategoriesActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtDescription: '',
        };
    }

    componentWillMount() {
        var { match } = this.props;
        if (match) { // update
            var id = match.params.id;
            this.props.onEditCategory(id)
        } // else => add
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.categoriesEditing){
            var {categoriesEditing} = nextProps;
            this.setState({
                id : categoriesEditing.id,
                txtName : categoriesEditing.name,
                txtDescription : categoriesEditing.description,
            })
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            var { id, txtName, txtDescription } = this.state;
            var category = {
                id: id,
                name: txtName,
                description: txtDescription,
            };
            if (id) {
                swal("Good job!", "You clicked the button!", "success");
                this.props.onUpdateCategory(category);
            } else {
                swal("Good job!", "You clicked the button!", "success");
                this.props.onAddCategory(category);
               
            }
            this.props.fetchAllCategories();
            this.props.history.goBack();
        }
    }

    render() {
        var { txtName, txtDescription } = this.state;
        var id = this.state.id
        return (
            <div>
                {id ? (
                    <Breadscrumb name="Edit Category" />
                ) : (
                    <Breadscrumb name="Add Category" />
                )}
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <Form onSubmit={this.onSubmit} ref={c => { this.form = c }}>
                                <legend>* Please complete infomation</legend>
                                <div className="form-group">
                                    <label>Category name: </label>
                                    <Input 
                                        onChange={this.onChange} 
                                        value={txtName} 
                                        name="txtName" 
                                        type="text" 
                                        className="form-control" 
                                        validations={[required]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description: </label>
                                    <Textarea 
                                        onChange={this.onChange} 
                                        value={txtDescription} 
                                        name="txtDescription" 
                                        className="form-control" 
                                        rows="3"
                                        validations={[required]}
                                    >
                                    </Textarea>
                                </div>
                                <hr />
                                <div style={{ marginTop: '10px' }}>
                                    <Link to="/category-list" className="btn btn-danger mr-5">
                                        <i className="fa fa-arrow-left"></i> Return
                                    </Link>
                                    <button type="submit" className="btn btn-primary">
                                        <i className="fa fa-save"></i> Save
                                    </button>
                                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categoriesEditing : state.categoriesEditing,
        categories : state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest());
        },
        onAddCategory: (category) => {
            dispatch(actAddCategoryRequest(category));
        },
        onUpdateCategory: (category) => {
            dispatch(actUpdateCategoryRequest(category));
        },
        onEditCategory : (id) => {
            dispatch(actGetCategoryRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesActionPage);
