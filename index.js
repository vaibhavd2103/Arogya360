/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {NativeBaseProvider} from 'native-base';
const ReduxProvider = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NativeBaseProvider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
