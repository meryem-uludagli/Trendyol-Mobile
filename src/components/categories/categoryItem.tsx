import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categoryItemProps} from '../../models/ui/categoryItemProps';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setCategory} from '../../store/slice/categoriesSlice';

const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        selectedCategory == category
          ? styles.selectedContainer
          : styles.unselectedContainer,
      ]}>
      <Text
        style={[
          styles.title,
          selectedCategory == category
            ? styles.selectedTitle
            : styles.unSelectedTitle,
        ]}>
        {category}
      </Text>
    </Pressable>
  );
};

export default CategoryItem;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 100,
    borderColor: Colors.GRAY,
  },
  selectedContainer: {
    backgroundColor: Colors.PRIMARY,
  },
  unselectedContainer: {
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  selectedTitle: {
    color: Colors.WHITE,
  },
  unSelectedTitle: {
    color: Colors.BLACK,
  },
});
