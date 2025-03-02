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
const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;
  const {product} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <ScrollView>
          <Image
            source={{uri: product.image}}
            style={{
              width: width,
              height: height * 0.3,
              resizeMode: 'contain',
              marginVertical: 20,
            }}
          />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
  },
  category: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.PRIMARY,
    marginVertical: 10,
  },
});
