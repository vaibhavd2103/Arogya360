/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/redux/store';
import {NativeBaseProvider} from 'native-base';
const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
