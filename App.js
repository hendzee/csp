import React from 'react';
import { HomePage, AddPage, DetailPage } from './src/pages';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='HOME' 
        options={{ 
          headerTitle: 'Daftar Siswa' 
        }} 
        component={ HomePage } 
      />

      <Stack.Screen 
        name='ADD_PAGE' 
        options={{ 
          headerTitle: 'Tambah Siswa' 
        }} 
        component={ AddPage } 
      />

      <Stack.Screen 
        name='DETAIL_PAGE' 
        options={{ 
          headerTitle: 'Detail Siswa' 
        }} 
        component={ DetailPage } 
      />
    </Stack.Navigator>
  )
}

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
)

export default App;