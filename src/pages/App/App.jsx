import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Index from '../IndexPage/IndexPage'
import authService from "../../services/authService";
import PreArrivalList from '../../components/PreArrivalList/PreArrivalList';
import AddPre from '../AddPre/AddPre'
import * as PreArrivalAPI from '../../services/pre-api'
import AddPostList from '../AddPostPage/AddPostPage'
import * as PostArrivalAPI from '../../services/post-api'
import EditPreArrival from '../EditPreArrival/EditPreArrival'
import EditPost from '../EditPost/EditPost'
import "./App.css";
import ItineraryPage from "../ItineraryPage/ItineraryPage";
import MyTripsPage from "../MyTrips/MyTrips";
import AddTrip from '../AddTrip/AddTrip';
import * as MyTripAPI from '../../services/myTrip-api';
import EditMyTrip from '../EditMyTrip/EditMyTrip'



class App extends Component {
  state = {
    preArrivals: [],
    postArrivals: [],
    myTrips: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: [] });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddPre = async newPreData => {
    const newPreArrival = await PreArrivalAPI.create(newPreData);
    newPreArrival.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    this.setState(state => ({
      preArrivals: [...state.preArrivals, newPreArrival]
    }), () => this.props.history.push('/itinerary')) 
  }

  handleAddTrip = async newTripData => {
    const newTrip = await MyTripAPI.create(newTripData);
    newTrip.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    this.setState(state => ({
      myTrips: [...state.myTrips, newTrip]
    }), () => this.props.history.push('/my-trips')) 
  }

  handleAddPost = async newPostData => {
    const newPost = await PostArrivalAPI.create(newPostData);
    this.setState(state => ({
      postArrivals: [...state.postArrivals, newPost]
    }), () => this.props.history.push('/itinerary')) 
  }

  handleUpdateMyTrip = async updatedTripData => {
    const updatedTrip = await MyTripAPI.update(updatedTripData);
    const newTripArray = this.state.myTrips.map(trip => 
      trip._id === updatedTrip._id ? updatedTrip : trip
      );
      this.setState(
        {myTrips: newTripArray},
        () => this.props.history.push('/my-trips')
        );
      }
  
  handleUpdatePreArrival = async updatedPreData => {
    const updatedPreArrival = await PreArrivalAPI.update(updatedPreData);
    const newPreArrivalsArray = this.state.preArrivals.map(pre => 
      pre._id === updatedPreArrival._id ? updatedPreArrival : pre
      );
      this.setState(
        {preArrivals: newPreArrivalsArray},
        () => this.props.history.push('/itinerary')
        );
      }

  handleDeletePreArrival = async id => {
    if(authService.getUser()){
      await PreArrivalAPI.deleteOne(id);
      this.setState(state => ({
        preArrivals: state.preArrivals.filter(pre => pre._id !== id)
      }), () => this.props.history.push('/itinerary'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleDeleteMyTrip = async id => {
    if(authService.getUser()){
      await MyTripAPI.deleteOne(id);
      this.setState(state => ({
        myTrips: state.myTrips.filter(trip => trip._id !== id)
      }), () => this.props.history.push('/my-trips'));
    } else {
      this.props.history.push('/')
    }
  }

  handleUpdateToDo = async updatedPostData => {
    const updatedPost = await PostArrivalAPI.update(updatedPostData);
    const newPostArray = this.state.postArrivals.map(t =>
      t._id === updatedPost._id ? updatedPost : t
    );
    this.setState(
      { postArrivals: newPostArray },
      () => this.props.history.push('/itinerary')
    );
  }

  handleDeletePostArrival = async id => {
    if(authService.getUser()) {
      await PostArrivalAPI.deleteOne(id);
      this.setState(state => ({
        postArrivals: state.postArrivals.filter(a => a._id !== id)
      }), () => this.props.history.push('/itinerary'))
    } else {
      this.props.history.push('/login')
    }
  }

  async componentDidMount() {
    const preArrivals = await PreArrivalAPI.getAll();
    const postArrivals = await PostArrivalAPI.getAll();
    const myTrips = await MyTripAPI.getAll();
    console.log(myTrips)
    this.setState({ preArrivals, postArrivals, myTrips })
  }


  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} 
        handleLogout={this.handleLogout} 
        />
        <Route
          exact
          path="/"
          render={({history}) => (
            <main>
              <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
            
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route 
          exact
          path="/index"
          render={() => 
            <Index /> } />

        <Route 
          exact
          path="/preArrival"
          render={() =>
            <PreArrivalList 
              preArrivals={this.state.preArrivals}
              user={this.state.user}
              handleDeletePreArrival={this.handleDeletePreArrival}
        /> } />

        <Route
          exact
          path="/addPreArrival"
          render={() =>
            authService.getUser() ?
              <AddPre
                handleAddPre={this.handleAddPre}
                />
                :
                <Redirect to='/' />
          } />

        <Route
            exact
            path="/postToDo"
            render={() =>
              authService.getUser() ?
              <AddPostList
              handleAddPost={this.handleAddPost}
              />
              :
              <Redirect to="/" />
        }/>
         <Route
          exact path='/editPost' render={({ location }) =>
            authService.getUser() ?
              <EditPost
                handleUpdateToDo={this.handleUpdateToDo}
                location={location}
                user={this.state.user}
              />
              :
              <Redirect to='/' />
          } />
        <Route 
        exact path='/edit' render={({ location }) =>
        authService.getUser() ?
          <EditPreArrival 
            handleUpdatePreArrival={this.handleUpdatePreArrival}
            location={location}
            user={this.state.user}
          />
          :
          <Redirect to='/' />
        }/>
        <Route
        exact
        path='/itinerary' render={() =>
      authService.getUser() ?
        <ItineraryPage
          preArrivals={this.state.preArrivals}
          postArrivals={this.state.postArrivals}
          user={this.state.user}
          handleDeletePreArrival={this.handleDeletePreArrival}
          handleDeletePostArrival={this.handleDeletePostArrival}
          />
          :
          <Redirect to='/' />
      }/>
        <Route
        exact 
        path='/my-trips' render={() =>
        authService.getUser() ?
        <MyTripsPage
        myTrips={this.state.myTrips}
        preArrivals={this.state.preArrivals}
        user={this.state.user}
        handleDeleteMyTrip={this.handleDeleteMyTrip}
        />
        :
        <Redirect to='/' />
      } />
      <Route 
      exact
      path='/add-trip' render={() =>
      authService.getUser() ?
      <AddTrip 
      handleAddTrip={this.handleAddTrip}
      />
      :
    <Redirect to='/' />
  } />
    <Route 
    exact
    path='/edit-trip' render={({ location }) =>
    authService.getUser() ?
      <EditMyTrip
        handleUpdateMyTrip={this.handleUpdateMyTrip}
        location={location}
        user={this.state.user}
      />
      :
      <Redirect to='/' />
    }/>
      </>
    );
  }
}

export default App;

