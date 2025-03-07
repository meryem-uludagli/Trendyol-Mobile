import {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../store/actions/productsActions';
import {RootState} from '../../store';
import {height, width} from '../../utils/constants';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Colors} from '../../theme/colors';
import Button from '../../components/ui/button';
import Rate from '../../components/products/rate';
import FavoritesButton from '../../components/favorites/favoritesButton';
import FreeCargo from '../../components/badges/freeCargo';
import DisCount from '../../components/badges/disCount';
import Delivery from '../../components/badges/delivery';
import {addCart} from '../../store/slice/cartSlice';
const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;
  const {product} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FavoritesButton product={product} />
          <Image source={{uri: product.image}} style={styles.image} />
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product?.title}</Text>
          {product.rating && <Rate size="large" rating={product?.rating} />}
          <Text style={styles.description}>{product?.description}</Text>
          <View style={{flexDirection: 'row'}}>
            <FreeCargo />
            <DisCount />
            <Delivery />
          </View>
        </ScrollView>
      </View>
      <View style={styles.priceContainer}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
          <Text style={styles.price}>{product?.price}TL</Text>
          <Text style={styles.info}>Kargo Bedava</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button
            title="Sepeti Ekle"
            onPress={() => dispatch(addCart(product))}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
  },
  category: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.PRIMARY,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  priceContainer: {
    height: height * 0.1,
    borderTopWidth: 0.5,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
  },
  info: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.GREEN,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.PRIMARY,
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});
