import React from 'react'

//this component, as the name suggests, represents the footer of the app
const Footer = obj => {
    return(
        <footer>
        	{/* use of tabIndex for proper FOCUS */}
            <p tabIndex={0}>Made with <span className="love"><i className="fas fa-heart"></i></span> by Narendra</p>

        </footer>
    );
};

export default Footer;