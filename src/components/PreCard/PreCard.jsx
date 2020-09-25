// import React from 'react';
// import { Link } from 'react-router-dom';

// function PreCard({ user, preArrival, handleDeletePreArrival}) {
//     return (
//         <>
//         <div>
//             <div>
//                 <li>{preArrival.toDo}</li>
//             </div>
//         </div>
//         <>
//         <Link 
//         className="btn yellow black-text"
//         to={{
//             pathname: '/edit',
//             state: {preArrival}
//         }}>
//         <button type="submit" className="btn btn-warning btn-sm">Edit</button>
//         </Link>
//         </>
//         <>
//         <button type="submit" className="btn btn-danger btn-sm" onClick={() => handleDeletePreArrival(preArrival._id)}>
//             Delete 
//         </button>
//         </>
//         </>
//     )
// }
// export default PreCard;

import React from 'react';
import { Link } from 'react-router-dom';

function PreCard({ user, preArrival, handleDeletePreArrival}) {
    return (
        <>
        {user._id ? 
            <>
                <div>
                    <div>
                        <li>{preArrival.toDo}</li>
                    </div>
                </div>
                    <Link 
                    className="btn yellow black-text"
                    to={{
                        pathname: '/edit',
                        state: {preArrival}
                    }}>
                    <button type="submit" className="iButt">Edit</button>
                    </Link>
                        <button type="submit" className="iButt" onClick={() => handleDeletePreArrival(preArrival._id)}>
                            Delete 
                        </button>
            </>
            :
            'Not Yours'
        }
        </>
    )
}

export default PreCard;