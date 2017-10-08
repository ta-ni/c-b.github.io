import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () =>
    <Link className="logo" to="/">
        C
        <span className="logo__element">&</span>
        B
    </Link>;

export default Logo;