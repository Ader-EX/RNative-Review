import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";

import About from "../screens/About";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="About Game Zone" component={About} />
    </Stack.Navigator>
  );
}

export default HomeStack;
