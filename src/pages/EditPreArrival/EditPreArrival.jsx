import React, { Component } from 'react';
import './EditPreArrival.css'
import { Link } from 'react-router-dom';

class EditPreArrival extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.preArrival,
    };

formRef = React.createRef();

handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePreArrival(this.state.formData, this.props.location.state.myTripId);
  };

handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
    formData,
    invalidForm: !this.formRef.current.checkValidity()
    });
};


render() {
    return (
        <>
            <h1>Edit Pre Arrival Task</h1>
            <div className="EditPreArrival">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                        <label className="active" htmlFor="toDo">Task:</label>
                        <input name="toDo" id="toDo" type="text" className="active" value={this.state.formData.toDo} onChange={this.handleChange} required />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="updateTask"
                        disabled={this.state.invalidForm}
                    >
                        Update Tasks
                    </button>
                    <Link 
                        className="btn btn-danger"
                        to={{
                            pathname: '/itinerary'
                        }}
                    >
                    Cancel
                    </Link>                            
                </form>
            </div>
        </>
    )
}
}

export default EditPreArrival;