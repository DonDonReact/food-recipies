import React from "react";
import {
  Header,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { SERVERURL } from "../utils/constants";

export default class Categories extends React.Component {
  state = { items: [] };
  componentDidMount() {
    // this.props.navigation.setParams({ name: this.props.route.params.item.category_name });
    axios
      .get(
        SERVERURL +
          "/items?category_id=" +
          this.props.route.params.item.category_id
      )
      .then((response) => {
        console.log("getting items from axios");
        this.setState({
          items: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    
    return (
      <ScrollView>
      
        <View style={styles.center}>
          <Text>Categories {this.props.route.params.item.category_name} </Text>
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
            {this.props.route.params.item.category_name}
          </Text>
          {this.state.items.map((item, i) => {
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
                    </Text>
                  </TouchableOpacity>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Icon
                      style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
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
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
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
