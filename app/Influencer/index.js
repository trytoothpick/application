import { StackNavigator } from 'react-navigation';

import Feed from './screens/Feed';
import Details from './screens/Details';

export default StackNavigator({
  Feed: { screen: Feed },
  Details: { screen: Details },
});
