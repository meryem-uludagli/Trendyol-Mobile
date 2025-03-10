import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useEffect} from 'react';
import {getUserInfo} from '../../store/actions/userActions';
import Avatar from '../../components/user/avatar';
const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUserInfo({id: 1}));
  }, []);
  return (
    <ScrollView>
      <Avatar />
      <Text style={{fontSize: 16}}>
        {user?.name.firstname} {user?.name.lastname}
      </Text>
    </ScrollView>
  );
};
export default Profile;
const styles = StyleSheet.create({});
