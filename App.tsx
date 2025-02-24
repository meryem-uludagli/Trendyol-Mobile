import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import {Store} from './src/store/index';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
};
export default App;
