import React from 'react';
import { Link } from 'react-router-dom'
import './TripCard.css'


function TripCard({ user, myTrip, handleDeleteMyTrip}) {
    return (
        <>
        {user._id ? 
            <>
                 <div className="card">
                    <div className="card-body">
                        <h3>{myTrip.nameOfTrip}</h3>
                <Link
                to={{
                    pathname: '/itinerary',
                    state: {myTrip}
                }}> <button type="submit" className="tripButt">Details</button>
                </Link>
                <Link 
                    className="btn yellow black-text"
                    to={{
                        pathname: '/edit-trip',
                        state: {myTrip}
                    }}>
                    <button type="submit" className="tripButt">Edit</button>
                    </Link>
                    <button type="submit" className="tripButt" onClick={() => handleDeleteMyTrip(myTrip._id)}>
                            Delete 
                        </button>
                    </div>
                </div>
            </>
            :
            'Not Yours'
        }
        </>
    )
}

export default TripCard;