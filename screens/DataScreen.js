import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const sampleData = require("../sample.json");

const EmployeeCard = ({ e }) => (
  <TouchableOpacity style={[styles.item]}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text style={styles.id}>{e.id}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Text style={styles.title}>{e.name}</Text>
        <Text style={styles.email}>{e.email}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const renderEmployeeData = ({ item }) => {
  return <EmployeeCard e={item} />;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      minWidth: widthPercentageToDP(90),
      padding: 50,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: "#000080",
    },
    id: {
      color: "#fff",
      fontSize: 100,
      fontWeight: "bold",
    },
    title: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 50,
    },
    email: {
      color: "#fff",
      fontSize: 25,
    },
    mainTitle: {
      color: "#000080",
      fontSize: 40,
      marginBottom: 40,
    },
  });

const DataScreen = () => {
    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.mainTitle}>Employees</Text>
            <FlatList
              data={sampleData}
              renderItem={renderEmployeeData}
              keyExtractor={(employee) => employee.id}
              extraData={sampleData}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    );
  };

  export default DataScreen;