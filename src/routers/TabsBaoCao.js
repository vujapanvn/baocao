import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import screen from '../routers/routeName';
import * as React from 'react';
import HangNamScreen from '../screen/BaoCao/HangNamScreen';
import HangThangScreen from '../screen/BaoCao/HangThangScreen';
const Tab = createMaterialTopTabNavigator();

function TabsBaoCao() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screen.HANG_THANG_SCREEN} component={HangThangScreen} />
      <Tab.Screen name={screen.HANG_NAM_SCREEN} component={HangNamScreen} />
    </Tab.Navigator>
  )
}
export default TabsBaoCao;