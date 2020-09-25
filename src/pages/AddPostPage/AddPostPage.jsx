import React, { Component } from 'react';
import './AddPostPage.css'


class AddPostList extends Component {
    state = {
        formData: {
            toDo: []
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.handleAddPost(this.state.formData, this.props.location.state.myTripId)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData
        });
     }

     formRef = React.createRef()

    render() {
        return (
            <>
            <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
            <h1>Add a Post Arrival Task</h1>
            <div className="card" id="addPost">
            <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                    <label htmlFor="toDo">Task</label>
                    <input name="toDo" id="toDo" type="text" className="active" value={this.state.formData.toDo} onChange={this.handleChange}/>
                    </div>
                </div>
                
                <button className="postButt" type="submit">Add To Itinerary</button>
            </form>
            
            </div>

            </>
        )
    }
    }

export default AddPostList
