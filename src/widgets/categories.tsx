import {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories} from '../store/actions/categoriesActions';
import type {RootState} from '../store/index';
import CategoryItem from '../components/categories/categoryItem';

const Categories: React.FC<Props> = ({navigation, route}) => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};
export default Categories;
const styles = StyleSheet.create({});
