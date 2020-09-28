/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import React from 'react';

const store = configureStore();

const AppWithRedux = () => {
    return(
        <Provider store={ store }>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => AppWithRedux);
