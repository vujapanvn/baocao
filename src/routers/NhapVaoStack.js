import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screen from '../routers/routeName';
import TienChiScreen from '../screen/NhapVao/TienChiScreen';
import TienThuScreen from '../screen/NhapVao/TienThuScreen';
import TabNavigator from './TabsNhapVao'

const Stack =createStackNavigator();

function NhapVaoStack(){
    return (
          <TabNavigator>
            <Stack.Navigator>
              <Stack.Screen name={screen.TIEN_THU_SCREEN} component={TienThuScreen} />
              <Stack.Screen name={screen.TIEN_CHI_SCREEN} component={TienChiScreen} />
            </Stack.Navigator>
          </TabNavigator>
      );
}

export default NhapVaoStack;