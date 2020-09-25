import React from 'react';
import './ItineraryPage.css'
import PreCard from '../../components/PreCard/PreCard'
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard'

const ItineraryPage = (props) => {
    return(
        <> 
        <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
        <div className="itin">

        <div className="card" id="left">
            <div className="card-body">

        <h1>Pre-Arrival Itinerary</h1>
        <div className='container'>

            {props.preArrivals.map((preArrival) =>
                <PreCard
                key={preArrival._id}
                preArrival={preArrival}
                handleDeletePreArrival={props.handleDeletePreArrival}
                user={props.user}
                />
                )}
        </div>
        <Link
        to={{
            pathname: '/addPreArrival',
            state: {
                preArrivals: []
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
            {props.postArrivals.map(postArrival =>
                <PostCard
                key={postArrival._id}
                postArrival={postArrival}
                handleDeletePostArrival={props.handleDeletePostArrival}
                user={props.user}
                />
                )} 
        </div>
        <Link
        to={{
            pathname: '/postToDo',
            state: {
                postArrivals: []
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

