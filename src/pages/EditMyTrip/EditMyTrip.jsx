import React, { Component } from 'react';
import './EditMyTrip.css'
import { Link } from 'react-router-dom';

class EditMyTrip extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.myTrip,
    };

formRef = React.createRef();

handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateMyTrip(this.state.formData);
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
            <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
            <h1>Update Trip</h1>
            <div className="card">
                <div className="card-body">

            <div className="EditPreArrival">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                <div className="row">
                            <div className="input-field col s12">
                            <label>Name Of Trip:</label>
                            <input name="nameOfTrip" id="nameOfTrip" type="text" className="active" value={this.state.formData.nameOfTrip} onChange={this.handleChange} />
                            <label>Location:</label>
                            <input name="location" id="location" type="text" className="active" value={this.state.formData.location} onChange={this.handleChange} />
                            <label>Departs:</label>
                            <input name="departs" id="departs" type="date" className="active" value={this.state.formData.departs} onChange={this.handleChange} />
                            </div>
                        </div>
                        <br></br>
                    <button
                        type="submit"
                        className="booty"
                        disabled={this.state.invalidForm}
                        >
                        Update Trip
                    </button>
                    <br />
                    <Link 
                        className=""
                        to={{
                            pathname: '/my-trips'
                        }}
                        >
                    Cancel
                    </Link>                            
                </form>
            </div>
                        </div>
                    </div>
        </>
    )
}
}

export default EditMyTrip;