import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BaoCaoStack from './BaoCaoStack';
import NhapVaoStack from './NhapVaoStack';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
      <Tab.Navigator>
         <Tab.Screen name="NhapVao" component={NhapVaoStack} />
        <Tab.Screen name="BaoCao" component={BaoCaoStack} />
       
      </Tab.Navigator>
  );
}