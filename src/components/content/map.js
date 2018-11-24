import React, { Component } from 'react';

//runtime type checking for React props and similar objects
//makes the code looks a little-bit cleaner
import PropTypes from 'prop-types';

export default class Map extends Component{
    markers = [];
    addMarker = (locations) =>{

        //checking for the Google script to be loaded, since only then the window.google prop will return a positive value
        if(window.google){

            //creating infowindow to display the details about the respective place fetched from FourSquare API
            let infowindow = new window.google.maps.InfoWindow();

            //looing over the location and fetching their location to set markers on them with animation
            for(let i = 0; i < locations.length; i++){
                let marker = new window.google.maps.Marker({
                    position:{
                        lat: locations[i].venue.location.lat,
                        lng: locations[i].venue.location.lng
                    },

                    //as per the project's requirement,I have implemented a simple but decent looking Drop animation to the markers
                    //took help from stackoverflow
                    animation: window.google.maps.Animation.DROP,
                    map: window.map,
                    title: locations[i].venue.id
                });

                //clicking on markers will open the infowindow to show the details about the place
                marker.addListener('click', () =>{
                    let contents = this.props.setContens(locations[i]);
                    infowindow.setContent(contents);
                    infowindow.open(window.map, marker);

                   //as per the project's requirement,I have implemented a simple but decent looking Bounce animation to the markers
                    //took help from stackoverflow
                    marker.setAnimation(window.google.maps.Animation.BOUNCE)

                    //used setTimeout method here, since it was easier to implement the choosen animation this way
                    setTimeout(function(){
                        marker.setAnimation(null)
                    },300)
                });
                this.markers.push(marker)
            }

            ////assigning window.infowindow and window.markers a variable/object sa map so that we do not have to pass that as a prop
            window.infowindow = infowindow;
            window.markers = this.markers;
        }
    };

    //below method is used to make sure that the markers shown by default are removed
    removeMarker = obj => {
        this.markers.forEach(marker => marker.setMap(null))
    }

    render(){

        //here we render the complete map
        //fetch the locations
        //add markers on the map
        //fetch the data
        this.removeMarker()
        this.addMarker(this.props.locations)
        return(
            <div id="map"></div>
        );
    }
}

Map.propTypes = {
    locations: PropTypes.array.isRequired,
    setContens: PropTypes.func.isRequired
}