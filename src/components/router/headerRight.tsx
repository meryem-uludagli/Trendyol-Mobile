import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Message, Notification, Profile} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Notification size={30} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  button: {
    marginRight: 5,
  },
});
