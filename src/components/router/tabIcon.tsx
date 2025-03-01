import React from 'react';
import {
  Heart,
  Home,
  Profile,
  SearchNormal1,
  ShoppingBag,
} from 'iconsax-react-native';
import {TabIconProps} from '../../models/ui/tabIconProps';
import {TABNAVIGATOR} from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.HOME:
      return focused ? (
        <Home size={size} color={color} variant="Bold" />
      ) : (
        <Home size={size} color={color} />
      );
    case TABNAVIGATOR.SEARCH:
      return <SearchNormal1 size={size} color={color} />;
    case TABNAVIGATOR.FAVORITES:
      return <Heart size={size} color={color} />;
    case TABNAVIGATOR.CART:
      return <ShoppingBag size={size} color={color} />;
    case TABNAVIGATOR.PROFILE:
      return <Profile size={size} color={color} />;
  }
};

export default TabIcon;
