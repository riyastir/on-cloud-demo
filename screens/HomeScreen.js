import * as React from "react";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DataScreen from "./DataScreen";
import WebViewScreen from "./WebView";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
       
          <Tab.Navigator>
            <Tab.Screen
              name="Employees"
              component={DataScreen}
              options={{
                tabBarLabel: "Employees",
                tabBarIcon: () => (
                  <Icon
                    name="users"
                    color="#000080"
                    type="font-awesome-5"
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Webview"
              component={WebViewScreen}
              options={{
                tabBarLabel: "Webview",
                tabBarIcon: () => (
                  <Icon
                    name="globe-americas"
                    color="#000080"
                    type="font-awesome-5"
                  />
                ),
              }}
            />
          </Tab.Navigator>
      );
}

export default HomeScreen;