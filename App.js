import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider,DefaultTheme } from 'react-native-paper';
import LoginContainer from './Containers/Login/LoginContainer';
import Login2Container from './Containers/Login/Login2Container';
import Login3Container from './Containers/Login/Login3Container';
import Login4Container from './Containers/Login/Login4Container';
import HomeShopContainer from './Containers/Home/HomeShopContainer';
import BottomNavigator from './Containers/Navigator/BottomNavigator';


const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};
function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen options={{ headerShown:false }} name="login" component={LoginContainer} />
        <Stack.Screen options={{ headerShown:false }} name="login2" component={Login2Container} />
        <Stack.Screen options={{ headerShown:false }} name="login3" component={Login3Container} />
        <Stack.Screen options={{ headerShown:false }} name="login4" component={Login4Container} />
        <Stack.Screen options={{ headerShown:false }} name="home" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

    </PaperProvider>
    
  );
}

export default App;
