// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search, Messages, Profile } from './screens';
import { PropertyList, PropertyDetail, LeaseManagement, 
         PaymentPortal, MaintenanceRequests } from './features';
import { AuthProvider, PropertyProvider } from './contexts';
import { Colors, Typography } from './styles';
import { Home as HomeIcon, Search as SearchIcon, 
         MessageSquare, User } from 'lucide-react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PropertyStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="PropertyList" 
      component={PropertyList}
      options={{ title: 'Available Properties' }}
    />
    <Stack.Screen 
      name="PropertyDetail" 
      component={PropertyDetail}
      options={{ title: 'Property Details' }}
    />
    <Stack.Screen 
      name="LeaseManagement" 
      component={LeaseManagement}
      options={{ title: 'Lease Management' }}
    />
    <Stack.Screen 
      name="PaymentPortal" 
      component={PaymentPortal}
      options={{ title: 'Payments' }}
    />
    <Stack.Screen 
      name="MaintenanceRequests" 
      component={MaintenanceRequests}
      options={{ title: 'Maintenance' }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <AuthProvider>
      <PropertyProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: Colors.primary,
              tabBarInactiveTintColor: Colors.gray,
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <HomeIcon color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={{
                tabBarIcon: ({ color }) => (
                  <SearchIcon color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Properties"
              component={PropertyStack}
              options={{
                tabBarIcon: ({ color }) => (
                  <HomeIcon color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Messages"
              component={Messages}
              options={{
                tabBarIcon: ({ color }) => (
                  <MessageSquare color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ color }) => (
                  <User color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PropertyProvider>
    </AuthProvider>
  );
};

export default App;