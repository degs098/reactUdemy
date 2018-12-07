import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Location extends React.Component{
    render(){        
        return (
            <div className="locationCont">
                <h1>{this.props.city}</h1>
            </div>
        );
    }
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;