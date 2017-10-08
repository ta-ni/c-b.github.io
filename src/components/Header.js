import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSettings} from '../actions/index';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {}
        };
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.displaySettingsItem = this.displaySettingsItem.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getSettings)
            .then(() => {
                this.toggleSettings('language',this.props.settings.languages[0]);
                this.toggleSettings('currency',this.props.settings.currencies[0]);
            });
    }

    toggleSettings(settingType, value) {
        this.setState({[settingType]: value});
    };

    toggleMenu(settingType) {
        this.setState((prevState) => ({
            menu: {
                [settingType]: !prevState.menu[settingType]
            }
        }))
    }

    displaySettingsItem(params) {

        let {settingType, values, lastElement} = params;

        return (
            <div className={lastElement ? 'header__settings header__settings header__settings_last' : 'header__settings'}>
                <div onClick={() => this.toggleMenu(settingType)} className="header__settings-button">{this.state[settingType]}</div>
                {this.state.menu[settingType] && <ul className="header__settings-block">
                    {values.map((item) =>
                        item !== this.state[settingType] &&
                        <li onClick={() => {
                            this.toggleSettings(settingType, item);
                            this.toggleMenu(settingType);
                        }} key={item} className="header__settings-item">{item}</li>
                    )}
                </ul>}
            </div>
        )
    };

    render() {

        if (!this.props.settings) {
            return null;
        }
        let { settings:{languages, currencies}} = this.props;

        let links = ['delivery', 'faq', 'help'];

        return (
            <div className="header">
                <div className="container clearfix">
                    <ul className="header__link-block">
                        {links.map((item) =>
                            <li className="header__link-item" key={item}>
                                <Link className="header__link" to={`/${item}`}>{item}</Link>
                            </li>
                        )}
                    </ul>
                    <div className="header__right-block">
                        {this.displaySettingsItem({
                            settingType: 'currency',
                            values: currencies,
                        })}
                        {this.displaySettingsItem({
                            settingType: 'language',
                            values: languages,
                            lastElement: true
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

Header.PropTypes = {
    dispatch: PropTypes.func,
    settings: PropTypes.object,
};

export default connect((state) => ({
    settings: state.settings,
}))(Header);