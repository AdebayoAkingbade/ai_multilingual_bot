import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout(){
  return(
    <Tabs screenOptions={{tabBarActiveTintColor: "#9045ff"}}>
      <Tabs.Screen name="index" options={{title: "Home", tabBarIcon: ({color})=>(
        <MaterialCommunityIcons name="home-circle-outline" size={24} color={color} />
      )}}></Tabs.Screen>
      <Tabs.Screen name="login" options={{title: "Login", tabBarIcon: ({color})=>(
        <AntDesign name="login" size={24} color={color} />
      )}}></Tabs.Screen>
    </Tabs>
  )
}
