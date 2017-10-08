import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducers from '../reducers';

export default function configureStore() {
    let middleware = [thunk, logger];

    const configureStore = createStore(
        reducers,
        applyMiddleware(...middleware),
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            configureStore.replaceReducer(reducers)
        })
    }

    return configureStore
}