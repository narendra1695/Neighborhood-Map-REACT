import React, { Component } from 'react';

//importing various components of the app
import Map from './map';
import List from './list';

//importing the back-end for the application which makes a fetch call for retrieving various data for places from FourSquare
import * as Fetch from '../../fetch/Fetch';

export default class Contents extends Component{
    state = {
        locations: [],
        allLocations: [],
        query: ""
    }


    //making all asynchronous calls
    componentDidMount(){
        Fetch.getLocationDetails()
        .then(locations => this.setState({locations, allLocations: locations}))
    }

    //showing the data fetched from the FourSquare API in the infowindow for any marker clicked for respective places
    setContens = (location) =>{
        return(
            `<div>
                <h3 className="title">Name: ${location.venue.name}</h3>
                <p className="address">Address: ${location.venue.location.address}</p>
            </div>`
        )
    }


    //sidebar contains the lists of all the places, clicking on any location will highlight the respective marker for the place
    //this happens with a nice Bounce animation
    //infowindow will open with all the details about the place
    infoClick = (location) => {
        for(let i = 0; i < window.markers.length; i++){
            if(location.venue.id === window.markers[i].title){
                let contents = this.setContens(location);
                window.infowindow.setContent(contents)
                window.infowindow.open(window.map, window.markers[i])

                //as per the project's requirement,I have implemented a simple but decent looking Drop animation to the markers
                //took help from stackoverflow
                window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE)
                    setTimeout(function(){
                        window.markers[i].setAnimation(null)
                    },1000)
            }
        }
    }

    //filter option is also project's requirement
    //filtering location based on what is entered in the input field is managed here, irrespective of case-sensitivity
    filterLocations = (query, locations) => {
        return(
            locations.filter(location => location.venue.name.toLowerCase().includes(query.toLowerCase()))
        )
    }

    //uses the filterLocation emthod to change the entries on the sidebar
    inputChange = (query) => {
        this.setState({query});
        if(query){
            this.setState({
                locations: this.filterLocations(query, this.state.locations)
            })
        }
        else{
            this.setState({
                locations: this.state.allLocations
            })
        }
    }

    //here we render the complete functiionality to make sure the sidebar works as expected
    //clicking on any sidebar entry highlights the maker with an animation
    //opens the infowindow with all details about the place
    render(){
        return(
            <div className="container">
                <List
                    locations={this.state.locations}
                    inputChange={this.inputChange}
                    showInfo={this.infoClick}
                    query={this.state.query}
                />
                <Map
                    locations={this.state.locations}
                    setContens={this.setContens}
                />
            </div>
        );
    }
};