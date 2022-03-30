
import React from 'react';
import { CounterComponent } from './components/CounterComponent';
import { Provider } from 'react-redux'
import {reducers} from '../src/reducers'

const App = () => {

  const store = createStore(reducers)
  return (


    <Provider store={store}>
      <CounterComponent />
    </Provider>

  );
};

export default App;
