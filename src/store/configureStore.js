import { createStore, combineReducers } from 'redux';
import studentReducer from './reducers/student';

const rootReducer = combineReducers({
    student: studentReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;