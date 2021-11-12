import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Switcher.scss';

const Switcher = ({
                    className,
                    round,
                    small,
                }) => {

    const switchClasses = classNames(
        'switch',
        className,
        {switchRound: round},
        {switchSmall: small},
    );

    return (
        <label
            className={switchClasses}>
            <input className="switchInput" type="checkbox"/>
            <span className="switchSlider"/>
        </label>
    );
};

Switcher.propTypes = {
    className: PropTypes.string,
};

Switcher.defaultProps = {
    className: '',
};

export default Switcher;