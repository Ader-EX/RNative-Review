import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import Home from "../screens/Home";
import AboutStack from "./AboutStack";
import About from "../screens/About";
import Header from "../shared/Header";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ImageBackground } from "react-native";

const rootDrawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <rootDrawer.Navigator screenOptions={{ headerTitle: () => <Header /> }}>
      <rootDrawer.Screen name="Home" component={HomeStack} />
      <rootDrawer.Screen name="About" component={AboutStack} />
    </rootDrawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
