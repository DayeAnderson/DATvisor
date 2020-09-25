import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'

function PostCard({ user, postArrival, handleDeletePostArrival, myTripId}) {
    return (
        <>
        {user._id ?   
        <>
        
        <div>
            <div>
                <li>{postArrival.toDo}</li>         
            </div>
        </div>
       
        <Link 
        className="btn yellow black-text"
        to={{
            pathname: '/editPost',
            state: {postArrival, myTripId}
        }}>
        <button type="submit" className="iButt">Edit</button>
        </Link>
        
        <button type="submit" className="iButt" onClick={() => handleDeletePostArrival(postArrival._id, myTripId)}>
            Delete 
        </button>
        </>
        :
        'Not Yours'
    }
        </>
    )
}

export default PostCard;