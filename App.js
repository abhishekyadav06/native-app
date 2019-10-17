import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MealSwipe from './screens/MealSwipe'
import DonateMealScreen from './screens/DonateMeal';
import RegisterMealScreen from './screens/RegisterMeal';
import './firebase/firebase';




class App extends React.Component {

  render() {
    return (
<AppNavigator /> 
);
    }
}

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Meal: MealSwipe,
  Donate: DonateMealScreen,
  Register: RegisterMealScreen

})
// Container of the app
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
