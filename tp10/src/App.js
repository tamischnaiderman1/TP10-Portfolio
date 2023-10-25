import Contacto from "./Contacto.js";
import Home from "./Home.js";
import Layout from "./Layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Creaciones from "./Creaciones.js";
import { MyContext } from "./MyContext.js";



export default function App() {
  const [m, setM] = useState([]);

  return (
    <MyContext.Provider value={{ m, setM }}>
      <BrowserRouter>
        <Routes>
          <Route path="/layout" element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
            <Route path="/Creaciones" element={<Creaciones />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
      </MyContext.Provider>
  );
}
{/*<NavigationContainer>
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
  </NavigationContainer>*/}

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