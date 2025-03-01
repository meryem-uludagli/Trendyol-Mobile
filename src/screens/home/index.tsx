import {SafeAreaView, Text, View} from 'react-native';
import Categories from '../../widgets/categories';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';
import BestSeller from '../../widgets/bestSeller';
import PopularProducts from '../../widgets/popularProducts';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View>
        <Categories />
        <Introduction />
        <BestSeller />
        <PopularProducts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
