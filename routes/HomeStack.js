import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Details from "../screens/Details";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default HomeStack;
