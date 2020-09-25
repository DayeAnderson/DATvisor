import React from 'react';
import './ItineraryPage.css'
import PreCard from '../../components/PreCard/PreCard'
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard'

const ItineraryPage = (props) => {
    return(
        <> 
        <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
        <div className="card">
            <div className="card-body">

        <h1>Pre-Arrival Itinerary</h1>
        <div className='container'>
        <div>
            </div>
            </div>
            {props.preArrivals.map((preArrival, myTrip) =>
                <PreCard
                key={myTrip._id}
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
        <button type="button" className="iButt">Add Task</button>
        </Link>
        </div>

        
        <div className='card'>
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
        <button type="button" className="iButt">Add Task</button>
        </Link>
        </div>  
        </>
    )
}
 
export default ItineraryPage;