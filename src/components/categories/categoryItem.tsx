import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categoryItemProps} from '../../models/ui/categoryItemProps';

const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={{fontSize: 18}}>{category}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 100,
  },
});
