import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import screen from '../routers/routeName';
import * as React from 'react';
import TienChiScreen from '../screen/NhapVao/TienChiScreen';
import TienThuScreen from '../screen/NhapVao/TienThuScreen';
const Tab = createMaterialTopTabNavigator();

function TabsNhapVao() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screen.TIEN_THU_SCREEN} component={TienThuScreen} />
      <Tab.Screen name={screen.TIEN_CHI_SCREEN} component={TienChiScreen} />
    </Tab.Navigator>
  );
}
export default TabsNhapVao;