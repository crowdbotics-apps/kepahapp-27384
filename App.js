// import React from "react";
// import { Provider } from "react-redux";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
// import { configureStore, createReducer, combineReducers } from "@reduxjs/toolkit";

// import { screens } from "@screens";
// import { hooks, slices, navigators, initialRoute } from "@modules";
// import { connectors } from "@store";

// const Stack = createStackNavigator();

// const getNavigation = (modules, screens, initialRoute) => {
//   const Navigation = () => {
//     const routes = modules.concat(screens).map(([name, navigator]) => {
//       return (
//         <Stack.Screen key={name} name={name} component={navigator} />
//       )
//     });
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName={initialRoute}>
//           {routes}
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
//   return Navigation;
// }

// const getStore = slices => {
//   const reducers = Object.fromEntries(slices.map(([name, slice]) => [name, slice.reducer]));

//   const appState = {
//     name: "kepahapp_27384Identifier",
//     url: "https://kepahapp_27384Identifier.botics.co",
//     version: "1.0.0"
//   }

//   const appReducer = createReducer(appState, _ => {
//     return appState;
//   })

//   const reducer = combineReducers({
//     app: appReducer,
//     ...reducers
//   });

//   return configureStore({
//     reducer: reducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware()
//   });
// }


// const App = () => {
//   const Navigation = getNavigation(navigators, screens, initialRoute);
//   const store = getStore([...slices, ...connectors]);

//   let effects = {};
//   hooks.map(([_, hook]) => {
//     effects[hook.name] = hook();
//   });

//   return (
//     <Provider store={store}>
//       <Navigation />
//     </Provider>
//   );
// };

// export default App;



import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Welcome from './src/components/Resident/Welcome/Welcome';
import Welcome2 from './src/components/Resident/Welcome/Login';
import Resident from './src/components/Resident/Resident/Resident';
import ResidentPortal from './src/components/Resident/ResidentPortal/ResidentPortal';
import LinkBankAccount from './src/components/Resident/LinkBankAccount/LinkBankAccount';
import LogoAccount from './src/components/Resident/LinkBankAccount/LogoAccount';
import PayLease from './src/components/Resident/PayLease/PayLease';
import Confirm from './src/components/Resident/PayLease/Confirm';
import PayLeaseLogo from './src/components/Resident/PayLease/Logo';
import SecurityReport from './src/components/Resident/SecurityReport/SecurityReport';
import LogoSecurity from './src/components/Resident/SecurityReport/Logo';
import VisitorList from './src/components/Resident/VisitorList/VisitorList';
import AddVisitor from './src/components/Resident/VisitorList/AddVisitor';
import AddVisitorLogo from './src/components/Resident/VisitorList/AddVisitorLogo';
import SubmitMaintenance from './src/components/Resident/SubmitMaintenance/SubmitMaintenance';
import MaintenanceRequest from './src/components/Resident/SubmitMaintenance/MaintenanceRequest';
import AddMaintenanceLogo from './src/components/Resident/SubmitMaintenance/AddMaintenanceLogo';
import MsgManager from './src/components/Resident/MsgManager/MsgManager';
import EditVisitor from './src/components/Resident/VisitorList/EditVisitor';
import MaintenanceList from './src/components/Resident/SubmitMaintenance/MaintenanceList';
import Maintenance from './src/components/Resident/SubmitMaintenance/Maintenance';
import VisitorPortal from './src/components/Resident/VisitorList/VisitorPortal';
import SubmitRequest from './src/components/Resident/SubmitMaintenance/SubmitRequest';
import ConfirmMaintenance from './src/components/Resident/SubmitMaintenance/ConfirmMaintenance';
import MsgConversation from './src/components/Resident/Conversation/MsgConversation';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import store from './src/store/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <View>
    //   <MsgConversation/>
    // </View>
    <Provider store={store}>
      <NavigationContainer style={styles.main}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="Welcome2" component={Welcome2} />
          <Stack.Screen name="Resident" component={Resident} />
          <Stack.Screen name="ResidentPortal" component={ResidentPortal} />
          <Stack.Screen name="MaintenanceList" component={MaintenanceList} />
          <Stack.Screen name="LinkBankAccount" component={LinkBankAccount} />
          <Stack.Screen name="LogoAccount" component={LogoAccount} />
          <Stack.Screen name="PayLease" component={PayLease} />
          <Stack.Screen name="Confirm" component={Confirm} />
          {/* <Stack.Screen name="Logo" component={Logo} /> */}
          <Stack.Screen name="SecurityReport" component={SecurityReport} />
          <Stack.Screen name="LogoSecurity" component={LogoSecurity} />
          <Stack.Screen name="VisitorList" component={VisitorList} />
          <Stack.Screen name="AddVisitor" component={AddVisitor} />
          <Stack.Screen name="AddVisitorLogo" component={AddVisitorLogo} />
          <Stack.Screen name="EditVisitor" component={EditVisitor} />
          <Stack.Screen name="VisitorPortal" component={VisitorPortal} />
          <Stack.Screen name="PayLeaseLogo" component={PayLeaseLogo} />
          
          <Stack.Screen
            name="SubmitMaintenance"
            component={SubmitMaintenance}
          />
          <Stack.Screen
            name="MaintenanceRequest"
            component={MaintenanceRequest}
          />
          <Stack.Screen
            name="AddMaintenanceLogo"
            component={AddMaintenanceLogo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: '#fff'},
});

export default App;
