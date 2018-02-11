//@flow
//$FlowFixMe
import {StackNavigator, TabNavigator} from 'react-navigation';

import Login from './Scenes/HomeScreen';
import GoToDetail from './Scenes/GoToDetail';
import SubmitName from './Scenes/SubmitName';
import Detail from './Scenes/Detail';
import NameDisplay from './Scenes/NameDisplay';
import LogOut from './Scenes/LogOut';

const tabs = TabNavigator(
  {
    Tab1: {screen: GoToDetail},
    Tab2: {screen: SubmitName},
    Tab3: {screen: LogOut},
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
    },
    order: ['Tab1', 'Tab2', 'Tab3'],
    animationEnabled: true,
  },
);

export default StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        gesturesEnabled: false,
        headerLeft: null,
      },
    },
    Main: {
      screen: tabs,
      navigationOptions: {
        gesturesEnabled: false,
        headerLeft: null,
      },
    },
    Detail: {screen: Detail},
    NameDisplay: {screen: NameDisplay},
  },
  {
    initialRouteName: 'Login',
  },
);
