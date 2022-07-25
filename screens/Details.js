import React , { Component }  from "react";
import { PropTypes } from 'prop-types';

import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Share,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { ButtonGroup } from 'react-native-elements';
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

export default class Details extends React.Component {
  state = { details: [],favorites: [] };
 /* _renderRow(items, sec, i) {
    let addToFavourites = true;
    let iconColor = "white";
    for(const i in this.props.favorites){
      if(items === this.props.favorites[i]){
        addToFavourites = false;
        iconColor = "red";
      }
    }}
   
    // console.log("item values",item.topicName,item.topicDescription);*/
    
 constructor(props) {
  	super(props);
  	this.state = { addedToFavorite: false };

    this.addToFavorite = this.addToFavorite.bind(this);
    this.state = {
    // Default  buttons selection
    selectedIndex: 1,
    selectedTxt: this.props.route.params.item.Préparation, 
    btnTxt: {0: this.props.route.params.item.ingrédient,
            1: this.props.route.params.item.Préparation}
  }
  this.updateIndex = this.updateIndex.bind(this)
}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
  this.setState({selectedTxt: this.state.btnTxt[selectedIndex]})

  }

 /* componentWillReceiveProps(nextProps) {
    this.setState({ addedToFavorite: nextProps.selected });
  }*/

 addToFavorite() {
    this.setState({
      addedToFavorite: !this.state.addedToFavorite,
    }, () => {
      this.props.onPress();
    });
  }

 

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  /* componentDidMount() {
     console.log(this.props.allItems);
      
       this._updateList();
 }*/

 
 
  
 
  render() {
const { addedToFavorite } = this.state;
const { color, selectedColor, onPress } = this.props;
const buttons = ['Ingrédients', 'Préparation'];
const { selectedIndex, selectedTxt } = this.state
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          {/*<View style={styles.item}>
            <ImageBackground
             // source={require("../assets/Food/Tunisian.jpg")}
              style={styles.image} resizeMode = 'cover'
              
             >
              {/*resizeMode = 'cover'  >*/}
              <View style={styles.container}>
              <ImageBackground source={require("../assets/Food/Tunisian.jpg")} style={styles.image}
              resizeMode = 'cover'>
           
  
              <AntIcon
                name="arrowleft"
                style={{ position: "absolute", left: 5, top: 5, bottom: 0 }}
                size={30}
                color="#FFFFFF"
                onPress={() => this.props.navigation.goBack()}
              />
            
              <TouchableOpacity
        onPress={this.addToFavorite}
      >
        <View>
          <Icon 
            name={addedToFavorite ? 'heart' : 'heart-o'}
            color={addedToFavorite ? selectedColor : color}
            size={18}
          />
             
             
          <Icon
          style={{
                  position: "absolute",
                  right: 15,
                  bottom: -120,
                }}
            name="heart-o"
            size={18}
            color={color}
            style={[
              { display: addedToFavorite ? 'flex' : 'none' },
              styles.selectedColor,
            ]}
          />
        </View>
      </TouchableOpacity>
              <AntIcon
                name="sharealt"
                style={{
                  position: "absolute",
                  right: 15,
                  top: 5,
                  bottom: 0,
                }}
                color="#FFFFFF"
                size={30}
                onPress={this.onShare}
              />
              
      {/*}    <TouchableOpacity
        onPress={this.addToFavorite}
      >*/}
       {/* <View>
          <Icon 
            name={addedToFavorite ? 'heart' : 'heart-o'}
            color={addedToFavorite ? selectedColor : color}
            size={30}
          />

          <Icon style={{
                  position: "absolute",
                  right: 15,
                  bottom:-120,
                }}
            name="heart-o"
            size={30}
            color={color}
            style={[
              { display: addedToFavorite ? 'flex' : 'none' },
              styles.selectedColor,
            ]}
          />
        </View>*/}
  
    {/*  <TouchableOpacity
        onPress={this.state.favorites}
      >
             <Icon
                style={{
                  position: "absolute",
                  right: 15,
                  bottom: -120,
                }}
                raised
                name="heart-o"
                color="#f50"
                size={35}
              />
              <Icon
             
                style={{
                  position: "absolute",
                  right: 15,
                  bottom: -120,
                }}
                raised
                name="heart-o"
                color="#FFFFFF"
                size={35}
                onPress={this.state.favorites}
              />
             </TouchableOpacity>*/}
            </ImageBackground>
          </View>
          
         
        {/*<View style={styles.footerCard}>
              <View style={styles.footerItem}>
                <Image source={require('../assets/images/clock.png')} />
                <Text style={styles.footerItemText}>45 min</Text>
              </View>
            
            </View>*/}
       
         
         <View style={styles.center}>
          <View>
          <AntIcon
                name="clockcircleo"
                style={{ position: "relative", left: 150, top: 20, bottom: 0 }}
                size={20}   />
                
                <Text style={{position: "relative", left: 14, top: 0,
                    alignSelf: "center",
                    fontSize: 17,  
                    color: "#333"}}>
                   {this.props.route.params.item.duration}min</Text>
               </View>
               
               
              
              
           {/* <Text>{this.props.route.params.item.item_id} </Text>*/}
            <View >

              <Text style={styles.Title}style={{
                    alignSelf: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#333",
                           }}>
                {this.props.route.params.item.title}
              </Text>
                <View>
                 <View style={styles.container}>
      <ButtonGroup
        
        buttons={buttons}
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        containerStyle={{height: 30}}
        buttonContainerStyle={{backgroundColor: '#ffffff'}}
        textStyle={{color: '#000000'}}
        
      />
    
      {/*<ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 35}}
    />*/}
    </View>
                  {/*<Text
                    style={{
                    alignSelf: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333",
                    top:25
                           }}>  Ingrédients
                     </Text>*/}
           {/* <View style={{ marginLeft: 10,marginRight: 10,backgroundColor: 'white',top:30 }}
                  shadowOffset={{height: 2, widht:0}}
                  alignItems= 'center'
                  shadowColor= '#000'
                  borderRadius={15} 
                  shadowOpacity={0.25}
                  elevation={5}
                   >
        
              <Text  style={{ 
                fontSize: 15,  
                color: "#333" }} > 
              
                {this.props.route.params.item.ingrédient}{" "}
              </Text>
              </View>*/}
              </View>
               <View > 
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "#333",
                top:30
              }}
            >
            
            </Text>
           <View style={{ marginLeft: 10,marginRight: 10,backgroundColor: 'white',top:30 }}
                  shadowOffset={{height: 2, widht:0}}
                  alignItems= 'center'
                  shadowColor= '#000'
                  borderRadius={15} 
                  shadowOpacity={0.65}
                  elevation={5}
                   >
              <Text style={{
                
                fontSize: 15,
                
                color: "#333",
                
              }} >
                {selectedTxt}{" "}
                
              </Text>
              </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginVertical: 0,
  },
 
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 240,
    width: '100%',
    alignSelf: "center",
    
  },
  
  /*footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginLeft: 130,
  },
  footerItemText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
    fontWeight: '500',
  },*/
  
});