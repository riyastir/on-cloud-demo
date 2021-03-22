import * as React from "react";
import { Alert } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();
export const AuthContext = React.createContext();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

const App = () => {
  const [loginState, setLoginState] = React.useState(false);

  const authContext = React.useMemo(
    () => ({
      signIn: (data) => {
        if (data.username != "" && data.password != "") {
          if (data.username == "admin" && data.password == "123456") {
            setLoginState(true);
          } else {
            Alert.alert("Login failed", "Invalid username and password");
          }
        } else {
          Alert.alert("Login failed", "Please enter username and password");
        }
      },
    }),
    []
  );

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {loginState ? <HomeScreen /> : <AuthStackScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};

export default App;
