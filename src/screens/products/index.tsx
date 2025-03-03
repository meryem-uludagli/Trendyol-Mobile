import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';
import {useEffect} from 'react';
import {getAllProducts} from '../../store/actions/productsActions';
import Categories from '../../widgets/categories';

const ProductList: React.FC = () => {
  const {products} = useSelector((state: RootState) => state.products);
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts({category: selectedCategory}));
  }, [selectedCategory]);
  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};
export default ProductList;
const styles = StyleSheet.create({});
