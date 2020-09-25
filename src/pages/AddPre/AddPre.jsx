import React, { Component } from 'react'
import './AddPre.css';

class AddPre extends Component {
    state = { 
        invalidForm: true,
        formData: {
            toDo: []
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddPre(this.state.formData, this.props.location.state.myTripId)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
     }

     formRef = React.createRef()

    render() { 
        return ( 
            <>
                <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
                <h1>Add a Pre Arrival Task</h1>
                <div className="card">
                <div className="card-body">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <label htmlFor="toDo">Task:</label>
                            <input name="toDo" id="toDo" type="text" className="active" value={this.state.formData.toDo} onChange={this.handleChange} />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="PreAddBtn"
                                    >
                            Add to Itinerary
                        </button>                         
                    </form>
                    </div>
                    </div>
            </>
         );
    }
}
 
export default AddPre;