import { StackNavigator } from 'react-navigation';

import Search from './screens/Search';
import Campaign from './screens/Campaign';

export default StackNavigator({
  Search: { screen: Search },
  Campaign: { screen: Campaign },
});
