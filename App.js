import React from "react";
import todoReducer from "./store/reducer/todo";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from './navigation/StackNavigator';

const App = () => {

  const rootReducer = combineReducers({
    todos: todoReducer
  })

  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};



export default App;
