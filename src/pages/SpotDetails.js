import React, { Component } from 'react'
import Menu from '../components/Menu';
import userService from './../lib/user-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import skateSpotService from '../lib/skateSpot-service';
import BottomNav from '../components/BottomNav';


class SpotDetails extends Component {
    state = { 
            favorites: []
            };

            componentDidMount() {
                const { id } = this.props.match.params;

                skateSpotService
                .getOneSkateSpotById(id)
                .then( (response) => {
                    this.setState({favorites: response})
                })
                .catch( (err) => console.log(err));
            }

            handleButtonSubmit = event => {
                event.then( () => {
                    this.props.history.goBack();
                  })
              };

            addToFavorites = event => {
                const { id } = this.props.match.params;
                    userService.addToFavorites(id)
                  .then(() => {
                    this.props.history.push("/favorites");
                  })
              };


            render() {
                const { favorites } = this.state;

                return (
                    <div className="SpotDetailsPage">
                        <Menu />
                        <h1 className="detailsNameHeader">{favorites.name}</h1>
                        <div className="spotDetailsBanner"></div>
                        <div className="spotDetailsContainer">
                            <div className="spotNameAndLikeButton">
                                <button 
                                    onClick={this.addToFavorites}
                                    className="addToFavorites">Add to favorites
                                </button>
                            </div>
                            <div>
                                <h3>INFORMATION</h3>
                                <hr/>
                            <section className="infoDetails">
                                <section className="singleDetailWrap">
                                    <h3>TYPE:</h3>
                                    <p className="spotDetailValues">{favorites.type}</p>
                                </section>
                                <section className="singleDetailWrap">
                                    <h3>STATUS:</h3>
                                    <p className="spotDetailValues">{favorites.status}</p>
                                </section>
                                <section className="singleDetailWrap">
                                    <h3>INDOOR?:</h3>
                                    <p className="spotDetailValues">{favorites.indoor}</p>
                                </section>
                                
                                <h3 className="descriptionTitle">DESCRIPTION</h3>
                                    <p className="spotDetailValues">{favorites.description}</p>
                            </section>
                            </div>
                                <Link to="/map">
                                    <button className="goBackButtonDetails">Go Back</button>
                                </Link>
                            </div>
                        <BottomNav />
                    </div>
                )
            }
        }
        

export default withAuth(SpotDetails);