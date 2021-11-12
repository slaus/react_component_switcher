import React, { Fragment } from 'react';

import Switcher from './Switcher';

const Sandbox = () => (


    <Fragment>
        <h3 className="mt-5">Shitch</h3>
        <h5><span>1. Switcher normal:</span></h5>
        <Switcher/>
        <Switcher round/>
        <h5><span>1. Switcher small:</span></h5>
        <Switcher small/>
        <Switcher round small/>

    </Fragment>
);

export default Sandbox;