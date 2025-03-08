import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
const Profile: React.FC = () => {
  const {token} = useSelector((state: RootState) => state.auth);
  return (
    <View>
      <Text style={{fontSize: 16}}>{token}</Text>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({});
