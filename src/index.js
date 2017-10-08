import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import RootApp from './containers/RootApp';
import {AppContainer} from 'react-hot-loader';

import './styles/main.scss'

let store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(RootApp);

if (module.hot) {
    module.hot.accept('./containers/RootApp', () => {
        render(RootApp)
    });
}