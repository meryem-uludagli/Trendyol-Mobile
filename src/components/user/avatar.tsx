import {StyleSheet, Text, View} from 'react-native';
const Avatar: React.FC = ({name, surname, image, size}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{}</Text>
    </View>
  );
};
export default Avatar;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
