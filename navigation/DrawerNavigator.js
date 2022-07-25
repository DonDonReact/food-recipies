import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  ContactStackNavigator,
  DetailsStackNavigator,
  MainStackNavigator,
  CategoriesStackNavigator,
  FavoriteStackNavigator,
} from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={DetailsStackNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="Details" component={MainStackNavigator} />
      <Drawer.Screen name="Categories" component={CategoriesStackNavigator} />
     <Drawer.Screen name="Favorite" component={FavoriteStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
