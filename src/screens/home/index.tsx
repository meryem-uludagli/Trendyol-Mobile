import {SafeAreaView, Text, View} from 'react-native';
import Categories from '../../widgets/categories';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View>
        <Categories />
        <Introduction />
      </View>
    </SafeAreaView>
  );
};

export default Home;
