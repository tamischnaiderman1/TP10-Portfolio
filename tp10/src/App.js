import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/login.js";
import Contacto from "./src/components/Contacto.js";
import Home from "./src/components/Home.js";
import { ContextProvider } from "./src/contextState.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Contacto"
            component={Contacto}
            options={{ title: "Contacto" }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});