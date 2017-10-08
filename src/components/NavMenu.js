import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Logo from './Logo';

const NavMenu = (props) => {

    let menuItems = [
        {
            name: 'home',
            link: '/',
        },
        {
            name: 'catalog',
            link: '/catalog'
        },
        {
            name: 'news',
            link: '/news',
        },
        {
            name: 'sale',
            link: '/sale',
        },
        {
            name: 'about',
            link: '/about',
        },
        {
            name: 'contact',
            link: '/contact',
        },
    ];

    return (
        <div className={props.bottomNavMenu ? 'nav nav_extra' : 'nav'}>
            <div className="container clearfix">
                <div className="nav__left-block">
                    <Logo/>
                </div>
                {props.bottomNavMenu ?
                    <div className="nav__right-block">
                        ©2010 - 2016 All rights reserved
                    </div>
                    :
                    <div className="nav__right-block nav__right-block_extra">
                        <p className="nav__right-block-text">your bag</p>
                        <div className="nav__right-block-element">{2}</div>
                        <div className="nav__right-block-icon"/>
                    </div>
                }
                <ul className="nav__menu">
                    {menuItems.map((item) => {
                        return (
                            <li className="nav__menu-item" key={item.name}>
                                <NavLink exact className={
                                    props.settings.sale && item.name === 'sale' ?
                                        'nav__menu-link nav__menu-link_important' :
                                        'nav__menu-link'
                                } to={item.link} activeClassName="nav__menu-link_active">{item.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

NavMenu.PropTypes = {
    bottomNavMenu: PropTypes.bool,
    settings: PropTypes.bool,
};

export default connect((state) => ({
    settings: state.settings,
}))(NavMenu);