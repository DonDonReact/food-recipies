import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { MainStackNavigator } from "./navigation/StackNavigator";
//import BottomTabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
