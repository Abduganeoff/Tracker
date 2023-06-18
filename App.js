import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";
import { navigationRef } from "./src/navigationRef";

// Screens
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ title: "Track List" }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{ title: "Create" }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="ResolveAuth"
            component={ResolveAuthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ title: "Sign Up", headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ title: "Sign In", headerShown: false }}
          />

          <Stack.Screen
            name="MainFlow"
            component={MainFlow}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name="TrackDetail"
            component={TrackDetailScreen}
            options={{ title: "Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};
export default App;
