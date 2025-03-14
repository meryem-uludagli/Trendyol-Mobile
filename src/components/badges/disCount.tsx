import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {Box, DiscountShape} from 'iconsax-react-native';

const DisCount: React.FC = () => {
  return (
    <View style={styles.container}>
      <DiscountShape size="22" color={Colors.PRIMARY} />
      <Text style={styles.text}>2. Ürün Indirim</Text>
    </View>
  );
};
export default DisCount;
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '25%',
    margin: 10,
    paddingVertical: 5,
    backgroundColor: '#ffe3e3',
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    marginTop: 5,
  },
});
