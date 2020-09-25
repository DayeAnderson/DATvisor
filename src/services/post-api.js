import tokenService from '../services/tokenService';
const BASE_URL = '/api/postArrival/';

export function getAll() {
    return fetch(BASE_URL, {
        method: "GET",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    }, { mode: "cors" })
        .then(res => res.json());
  }

export function create(postArrival, myTripId) {
    return fetch(`${BASE_URL}${myTripId}`, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(postArrival)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function update(postArrival) {
    return fetch(`${BASE_URL}${postArrival._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(postArrival)
    }, {mode: "cors"})
    .then(res => res.json());
  }

  export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
  }


  