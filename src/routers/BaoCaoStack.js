import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screen from '../routers/routeName';
import HangNamScreen from '../screen/BaoCao/HangNamScreen';
import HangThangScreen from '../screen/BaoCao/HangThangScreen';
import TabNavigator from './TabsBaoCao'


const Stack = createStackNavigator();

function BaoCaoStack(){
    return (
      <TabNavigator>
          <Stack.Navigator>
            <Stack.Screen name={screen.HANG_NAM_SCREEN} component={HangNamScreen} />
            <Stack.Screen name={screen.HANG_THANG_SCREEN} component={HangThangScreen} />
          </Stack.Navigator>
      </TabNavigator>
      );
}

export default BaoCaoStack;