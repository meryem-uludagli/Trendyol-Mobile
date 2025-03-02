import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
const Button: React.FC<Props> = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>Sepete Ekle</Text>
    </TouchableOpacity>
  );
};
export default Button;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    minHeight: height * 0.05,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});
