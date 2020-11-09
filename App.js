import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './src/routers/Tabs';

const App = () => {
    return (
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    )
}

export default App;