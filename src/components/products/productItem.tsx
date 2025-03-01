import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={{
          width: width * 0.25,
          height: height * 0.15,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        numberOfLines={2}
        style={{fontSize: 14, fontWeight: 'bold', marginVertical: 5}}>
        {product.title}
      </Text>

      <Text
        numberOfLines={2}
        style={{fontSize: 14, color: Colors.PRIMARY, marginVertical: 5}}>
        {product.category}
      </Text>

      <Text
        numberOfLines={2}
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 5,
          color: Colors.PRIMARY,
        }}>
        {product.price}
      </Text>
    </Pressable>
  );
};
export default ProductItem;
const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    minHeight: height * 0.28,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
  },
});
