import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk'
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';

const composeEnhancers = composeWithDevTools({
  
});
const rootReducer=combineReducers({
    cars: carsReducer,
    alerts: alertsReducer
})
const store = legacy_createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store