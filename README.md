# Neighborhood Map React

## Table of Contents

* [Instructions](#instructions)
* [Introduction](#introduction)
* [Working](#working)

## Instructions

In order to start using this project, one must have to do the following:
1. Clone the project, where you want to locally keep the files.
2. Once cloned, start the project using the following steps:
* Using npm install, install all the dependencies and packages
* Using npm start, start the project
3. Running the project requires internet (to fetch the Google Maps and data from FourSquare API).
4. The project has been optimized for various screen sizes.

## Introduction

This is an advanced front-end web application made using the following:
1. React
2. Integration of Google Maps using Vanilla-JS
3. FourSquare API
4. Responsive design

## Working

The following application is an example which have the integration of Google Maps in it using React functionalities. Using FourSquare API data for near-by food related places has been fetched. Markers are set on the maps, which shows the near-by food related places. Using the infoWindow functionality for Google Maps, details regarding the respective places are displayed.

Their is also a sidebar which lists all the places for near-by food related places, shown in the map. Clicking on any list-item will animate the respective marker and will also open the infoWindow which shows the details for the respective place.

Their is also a filter i.e., input tag field which is used to filter the list-items. As soon as the entry inside the input field matches the place's name, it gets filtered-out and only the matching names will be shows on the sidebar as well as on the map.

Their is also a Service Worker functionality added in the project. In order to make sure that the project works, even if their is no internet connection, user have to run the project in production mode. To make sure that the applciation runs in the production mode, follow the steps below:
* Using npm run build, which will run the build mode for React,
* Using serve -s build, which will save the project files in caches,
* Using localhost:5000 to visit the application.

Icons used in the project are from [Fontawesome](https://fontawesome.com/).
Color scheme used in this project is from [Flat UI Colors](https://flatuicolors.com/).