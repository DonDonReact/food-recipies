import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Share,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Container, Header, Content, Left } from "native-base";
import { useTheme } from "@react-navigation/native";
import { SearchBar } from 'react-native-elements';
//import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { SERVERURL } from "../utils/constants";

// const [search, setSearch] = useState('');
//const [filteredDataSource, setFilteredDataSource] = useState([]);
  //const [items, setItems] = useState([]);
export default class Home extends React.Component {
  // theme = useTheme();
  
  state = { items: [], categories: [], filtredItems: [], search:''};

  componentDidMount() {
    console.log(SERVERURL);
    Promise.all([
      axios.get(SERVERURL + "/allitems"),
      axios.get(SERVERURL + "/categories"),
    ]).then(([allitems, categories]) => {
      this.setState({ items: allitems.data.result });
      this.setState({ filtredItems: allitems.data.result });
      this.setState({ categories: categories.data.result });
    });
  }

  // componentDidUpdate(){
  // }
  searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = this.state.items.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      this.setState({ filtredItems: newData });
      this.setState({ search: text });
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({ filtredItems: this.state.items });
      this.setState({ search: text });
    }
  }

 
  

  //componentWillUnmount() {
    //this.setState({items:[], categories:[]});
  //}

  

  renderItem = ({ item, index }) => {
    let urimage = SERVERURL + "/img/" + item.category_name + ".jpg";
    
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Categories", { item })}
      >
        <Image
          source={{ uri: urimage }} // Use item to set the image source
          key={index} // Important to set a key for list items
          style={{
            width: 140,
            height: 140,
            borderWidth: 1,
            borderColor: "#ccc",
            resizeMode: "contain",
            margin: 3,
           
          }}
        />
      </TouchableOpacity>
    );
  };
  

  render() {
 
    return (
      <View style={{ flex: 1 }}>
      {/* <View style={styles.searchBox}>*/}
            
       { /*<TextInput 
          style={{flex:1,padding:0}}
          placeholderTextColor="#FFFF"
          autoCapitalize="none"
          searchIcon={{size: 24}}
          onChangeText={(text) => this.searchFilterFunction(text)}
          onClear={(text) => this.searchFilterFunction('')}
          underlineColorAndroid="transparent"
          placeholder="Type Here..."
          value={this.state.search}
        />*/}
       { /*<TextInput
          style={{flex:1,padding:0}}
          onChangeText={(text) => this.searchFilterFunction(text)}
          onClear={(text) => this.searchFilterFunction('')}
          autoCapitalize="none"
          
           underlineColorAndroid="transparent"
          placeholder="Search Here"
          value={this.state.search}
        />  */ }                      
        
       {/*</View>/*}
        
        
        
    
      
        {/* <Ionicons name="ios-search" size={20} /> */}
     { /* </View>*/}
     <SearchBar
          round
          placeholderTextColor="#FFFF"
          autoCapitalize="none"
          searchIcon={{size: 24}}
          onChangeText={(text) => this.searchFilterFunction(text)}
          onClear={(text) => this.searchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />
        <ScrollView style={styles.container}>
          {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}
         
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay
              horizontal={false}
              height={200}
              activeDotColor="#FF6347"
            >
              <View style={styles.slide}>
                <Image
                  source={require("../assets/Food/Pizza.jpg")}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../assets/Food/Rice.jpg")}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../assets/Food/Sandwich.jpg")}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
            </Swiper>
          </View>
          <View style={{paddingTop :20}}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Categories
            </Text>
          </View>
          <View style={styles.flatList}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.categories}
              renderItem={this.renderItem} 
              keyExtractor={(item, index) => index.toString()}  
            />
          </View>

          <View style={styles.cardsWrapper}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Recently Viewed
            </Text>

            {this.state.filtredItems.map((item, i) => {
              return (
                <View key={i} style={styles.card}>
                  {/* <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Details")}> */}
                  <View style={styles.cardImgWrapper}>
                    <Image
                      source={{ uri: SERVERURL + "/img/Pizza.jpg" }} //{require('../assets/Food/Rice.jpg')}
                      resizeMode="cover"
                      style={styles.cardImg}
                    />
                  </View>
                  <View style={styles.cardInfo}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Details", { item })
                      }
                    >
                      <Text style={styles.cardTitle}>{item.title}</Text>
                      <Text style={styles.cardDetails}>
                        {item.short_description}
                        <Image source={require('../assets/images/clock.png')} />
                      </Text>
                     
               
                
              
                    </TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                   
                     <Icon
                      style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0
                        }}
                        raised
                        name="heart-o"
                        //type='font-awesome'
                        color="#f50"
                        size={27}
                       
                      />
                    </View>
                  </View>
                  {/* </TouchableOpacity> */}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

// export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position:'absolute', 
    marginTop: Platform.OS === 'android' ? 20 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '60%',
    alignSelf:'center',
    borderRadius: 25,
    padding: 7,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  sliderContainer: {
    height: 150,
    width: '90%',
    marginTop: 77,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },


  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },

  cardsWrapper: {
    marginTop: "20%",
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 3,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
   
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
