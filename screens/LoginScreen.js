import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { Input } from "react-native-elements";
import { AuthContext } from "../App.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    minWidth: 800,
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
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#1947ee",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#1947ee",
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    elevation: 5,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
});
const LoginScreen = () => {
  const [username, setUsername] = React.useState("admin");
  const [password, setPassword] = React.useState("123456");
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.mainTitle}>Login</Text>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Input
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => signIn({ username, password })}
            >
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
