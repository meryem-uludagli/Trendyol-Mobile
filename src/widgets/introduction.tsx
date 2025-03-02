import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {height, width} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../utils/routes';
const Introduction: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTSLIST)}
      style={styles.container}>
      <Image
        source={require('../assets/images/Introduction.webp')}
        style={{
          width: width * 0.9,
          height: height * 0.2,
          resizeMode: 'stretch',
        }}
      />
    </Pressable>
  );
};
export default Introduction;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
