import {StyleSheet, Text, View} from 'react-native';
import {Product} from '../../models/data/productState';
const ProductItem: React.FC<Product> = ({product}) => {
  return (
    <View>
      <Text>ProductItem</Text>
    </View>
  );
};
export default ProductItem;
const styles = StyleSheet.create({});
