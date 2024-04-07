import React from 'react';
import PropTypes from 'prop-types';

const CountryImage = ({ classNames, src, altText, rounded }) => {
    return (
        <figure className={classNames}>
            <img
                src={src}
                alt={altText}
                className= {`${rounded ? 'rounded-circle' : ''} img-fluid`}
            />
        </figure>
    )
};

CountryImage.propTypes = {
    classNames: PropTypes.string,
    src: PropTypes.string,
    altText: PropTypes.string,
    rounded: PropTypes.bool,

}

export default CountryImage