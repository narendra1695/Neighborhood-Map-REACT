import React, {Component} from 'react';

//runtime type checking for React props and similar objects
//makes the code looks a little-bit cleaner
import PropTypes from 'prop-types';

export default class List extends Component{
    state = {

        //initially sidebar with the list of all the location is invisible/closed
        openSidebar: false
    }

    toggleClick = () => {
        this.setState((prevState) => {
            return{
                openSidebar: !prevState.openSidebar
            }
        })
    }

    backdropClick = () => {
        this.setState({openSidebar: false})
    }


    render(){

        //shortning the variable names to make the code look pretty
        let {locations, showInfo, query, inputChange} = this.props;

        //associating styling classes to the props
        let className = 'side-drawer';
        if(this.state.openSidebar){
            className = 'side-drawer open'
        }

        return(
            <div className="List">
            {/* use of tabIndex for proper FOCUS */}
            <button
                tabIndex={0}
                onClick={this.toggleClick}
                className="icon">
            <i className="fas fa-search-location"></i>
            </button>

            <div className={className}>
                <div className="filter">
                    <label htmlFor="filter-input" className="search-accs">Search Location</label>
                    {/* use of tabIndex for proper FOCUS */}
                    <input
                        tabIndex={0}
                        type="text"
                        id="filter-input"
                        className="query"
                        placeholder="Search here"
                        value={query}
                        onChange={e => inputChange(e.target.value)}/>
                </div>

                {/* use of aria-label is for proper ARIA-role */}
                <ol aria-label = "List of Restaurant">

                    {/* use of tabIndex for proper FOCUS */}
                    {locations.map(loc =>(
                        <li
                            className="listItem title"
                            tabIndex={0}
                            aria-labelledby="Venue Name"
                            role="button"
                            key={loc.venue.id}
                            onClick={() => {showInfo(loc)}}>
                            {loc.venue.name}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
        )
    }
};

List.propTypes = {
    locations: PropTypes.array.isRequired,
    inputChange: PropTypes.func.isRequired,
    showInfo: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
}