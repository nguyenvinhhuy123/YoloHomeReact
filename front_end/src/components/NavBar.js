import * as React from "react";
import Tab from "../constants/TabNav";
import HomePage from "../screen/HomePage.js";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';


//*Screen name
const homeName = "HomePage"

export default function NavBar() {
  //TODO: Screen to screen navigation
  //*Remove secondaryContainer that would be appear when icon is focused
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent"; 

  //*Tag.Screen: screen to be display (ie. homepage, control panel,...)
  return (
    <Tab.Navigator
      initialRouteName={HomePage}
      activeColor="#FFB267"
      inactiveColor="#F8F8F8"
      barStyle={{ backgroundColor: '#282424' }}
      labeled={false} //*Text for screen name under icon is not visible
      theme={theme}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            //TODO: Add more iconName and style later
            iconName = focused ? "home" : "home-outline";
          }
          //*Place holder icon
          else iconName = focused ? "add-circle" : "add-circle-outline"

          //Return icon for tab bar 
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}>
      {<Tab.Screen name={homeName} component={HomePage} />}
      {<Tab.Screen name={"Placeholder"} component={HomePage} />}
    </Tab.Navigator>
  );
}
