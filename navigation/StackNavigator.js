// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
//import About from "../screens/About";
import Contact from "../screens/Contact";
import Details from "../screens/Details";
import Categories from "../screens/Categories";
import Favorite from "../screens/Favorite";

import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

const Stack = createStackNavigator();

const screenOptionStyle = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: "#f77f00",
    
  },

  headerTintColor: "white",

  headerTitleStyle: {
    textAlign: "center",
    fontSize: 30,
    alignSelf: "center",
    marginRight: 60,
  },
  

  headerLeft: () => (
    
    <Icon
      style={{ marginLeft: 10 }}
      name="bars"
      size={39}
      color="#FFFFFF"
      right={16}
      onPress={() => navigation.openDrawer()}
    />
     
       
      
  ),
});

const detailsOptions = {
  title: "",
  headerStyle: {
    backgroundColor: "#f77f00",
    height: 20,          
  },
  headerTintColor: "#f77f00",
  headerLeft: null
  };

const screenOption = ({ navigation, route }) => ({
  title: route.params.item !== undefined ? route.params.item.category_name : "Category",
  headerLeft: () => (
    <AntIcon
      name="arrowleft"
      size={28}
      color="#FFFFFF"
      onPress={() => navigation.goBack()}
    />
  ),
});

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const DetailsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={detailsOptions}
       
            
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={screenOption}
      />
    </Stack.Navigator>
  );
};

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};
const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
};
export {
  MainStackNavigator,
  ContactStackNavigator,
  DetailsStackNavigator,
  CategoriesStackNavigator,
  FavoriteStackNavigator,
};

