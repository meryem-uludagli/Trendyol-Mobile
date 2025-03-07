import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {ButtonProps} from '../../models/ui/buttonProps';
const Button: React.FC<ButtonProps> = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    minHeight: height * 0.047,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});
