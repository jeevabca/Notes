import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constants/ScreenNames';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchNotesScreen from '../screens/SearchNotesScreen';
import NotesDetailScreen from '../screens/NotesDetailScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.SPLASHSCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SplashScreen} />
        <Stack.Screen name={SCREENS.HOMESCREEN} component={HomeScreen} />
        <Stack.Screen
          name={SCREENS.SEARCHNOTESSCREEN}
          component={SearchNotesScreen}
        />
        <Stack.Screen
          name={SCREENS.NOTESDETAILSCREEN}
          component={NotesDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
