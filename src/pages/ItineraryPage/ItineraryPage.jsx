import React from 'react';
import './ItineraryPage.css'
import PreCard from '../../components/PreCard/PreCard'
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard'

const ItineraryPage = (props) => {
    console.log(props.location)
    console.log(props.history)
    // const myTrip = props.location.state.myTrip._id ? props.location.state.myTrip._id : props.history.location.state.myTripId 
    // console.log(myTrip)
    const tripPreArrivals = props.preArrivals.filter((preArrival) => {
        return props.location.state.myTrip._id === preArrival.myTrip 
    })
    const tripPostArrivals = props.postArrivals.filter((postArrival) => {
        return props.location.state.myTrip._id === postArrival.myTrip 
    })
    console.log(props.history)


    return(
        <> 
        <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
        <div className="itin">

        <div className="card" id="left">
            <div className="card-body">

        <h1>Pre-Arrival Itinerary</h1>
        
        <div className='container'>

            {tripPreArrivals.map((preArrival) =>
                <PreCard
                key={preArrival._id}
                preArrival={preArrival}
                handleDeletePreArrival={props.handleDeletePreArrival}
                user={props.user}
                myTripId={props.location.state.myTrip._id}
                />
                )}
        </div>
        <Link
        to={{
            pathname: '/addPreArrival',
            state: {
                preArrivals: [],
                myTripId: props.location.state.myTrip._id
            }
        }}>
        <button type="button" className="iBoo">Add Task</button>
        </Link>
        </div>
        </div>
        <div className="card" id="right">
            <div className="card-body">
        <h1>Post-Arrival Itinerary</h1>
        <div>
            {tripPostArrivals.map(postArrival =>
                <PostCard
                key={postArrival._id}
                postArrival={postArrival}
                handleDeletePostArrival={props.handleDeletePostArrival}
                user={props.user}
                myTripId={props.location.state.myTrip._id}
                />
                )} 
        </div>
        <Link
        to={{
            pathname: '/postToDo',
            state: {
                postArrivals: [],
                myTripId: props.location.state.myTrip._id
            }
        }}>
        <button type="button" className="iBoo">Add Task</button>
        </Link>
        </div>  
        </div>
        </div>
        </>
    )
}
 
export default ItineraryPage;