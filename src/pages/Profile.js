import React, { Component } from 'react'
import Menu from '../components/Menu';
import userService from './../lib/user-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class Profile extends Component {
    render() {
        const { user, logout, isLoggedin } = this.props;
        return (
            <div>
                <Menu />


                


                <h1>PROFILE</h1>
                <section className="banner">
                    <div className="picContainer">
                        <img className="profilePic" src="./../../profile-pic.png" alt="profile-pic"/>
                    </div>
                </section>

                <section className="bio">
                    <div className="bioFiller"></div>
                    <div className="bioFloatDown">
                        <h1 className="username"> @ {user.username} </h1>
                        <h3 className="currentLocation"> <img className="profilePin" src="./../../pin.svg" alt="location pin"></img> {user.city} </h3>
                        <h3 className="spotsAdded"> <b>{user.mySpots.length}</b> SPOTS ADDED </h3>
                    </div>
                </section>

                <section className="media">
                    <p>Media</p>
                </section>
            </div>
        )
    }
}

export default withAuth(Profile);