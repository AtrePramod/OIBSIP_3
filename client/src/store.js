import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzaReducer } from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'

const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
})

const intialState = {}
const middleware = [thunk]

const store = createStore(rootReducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;