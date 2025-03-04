import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {Box, Send2} from 'iconsax-react-native';

const Delivery: React.FC = () => {
  return (
    <View style={styles.container}>
      <Send2 size="22" color={Colors.GREEN} />
      <Text style={styles.text}>Hizli Teslimat</Text>
    </View>
  );
};
export default Delivery;
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '25%',
    margin: 10,
    paddingVertical: 5,
    backgroundColor: '#bde8ca',
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    marginTop: 5,
  },
});
