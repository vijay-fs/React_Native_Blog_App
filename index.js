import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import {myTheme} from './components/NativePaperTheme';
import {Provider as ReduxProvider} from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

import mysaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mysaga);
export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={myTheme}>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
