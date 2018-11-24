//client-id: HQIDYC0032D4A220YXTZ2SO31INAS2BZHEABO4AAGPHVDIGW
const CLIENT_ID = "HQIDYC0032D4A220YXTZ2SO31INAS2BZHEABO4AAGPHVDIGW";

//client-secret: 0CFDCKLB3M3JD5HQLNFS1OXXX5CYJGC033BPKB1NEJVDRPLV
const CLIENT_SECRET = "0CFDCKLB3M3JD5HQLNFS1OXXX5CYJGC033BPKB1NEJVDRPLV";

//version: 20180323

//below we are dynamically building a URL with components such as:
/*
unique client ID
unique client secret
version
near - place to look for if, ll (latitude and longitude are not provided)
query - what to look for in the place
limit - number to places to look for
*/
const URL = `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&near=Roorkee&query=food&limit=10`;

//below methiod is used to fetch the details of the location we are looking for
//here we are using the explore endpoint
export const getLocationDetails = obj =>
    fetch(URL)
        .then(response => response.json())
        .then(result => result.response.groups[0].items)
        .catch(error => alert("Problem with FourSquare API!"))

//instead of using aditional library, I have used vanilla-JS to get my script tag running using some DOM manipulations

//below method is used to initiate the window variable of the browser to load the  google map
export const initMap = obj => {
    let map = new window.google.maps.Map(document.getElementById('map'),
    {
        //my location is Roorkee, a small city in India
        center: {lat: 29.8690, lng: 77.8950},

        //I have intentionally kept the zoom level to be 15 since I have maximum of 10 places to show
        zoom: 15
    });

    //assigning window.map a variable/object sa map so that we do not have to pass that as a prop
    window.map = map;
}

//below method is used to load the script tag
//using the jQuery DOM manipulation, I have added the script tag which loads the Google map
export const loadScript = obj => {

    let scriptElement = createScript();
    let scriptOfPage = document.getElementsByTagName("script");
    let firstScript = scriptOfPage[0];
    firstScript.parentNode.insertBefore(scriptElement, firstScript);

    //assigning window.initMap a variable/object sa map so that we do not have to pass that as a prop
    window.initMap = initMap;
}


//below method is used to load the map when the Google script is loaded
export const createScript = obj => {
    const mapScript = document.createElement("script");

    //Google maps API: AIzaSyChaOSl_NK4_N-S-PG4SQpOlePyt3glSxE

    const MY_API_KEY = "AIzaSyChaOSl_NK4_N-S-PG4SQpOlePyt3glSxE";

    //building a source URL with my Google map API key
    mapScript.src= `https://maps.googleapis.com/maps/api/js?key=${MY_API_KEY}&callback=initMap`;

    //script tag functionalities
    //taken help from overflow
    mapScript.async = true;
    mapScript.defer = true;

    return mapScript;
}