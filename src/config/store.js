import { createStore, combineReducers,compose } from 'redux'

import  cartReducer from '../features/cart/reducer'

const rootReducer = combineReducers({
    cart: cartReducer
})

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReducer,
    enhancers
    );

export default store