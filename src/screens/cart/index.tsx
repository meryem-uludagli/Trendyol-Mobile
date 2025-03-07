import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';

const Cart: React.FC = () => {
  const {cart, totalPrice} = useSelector((state: RootState) => state.cart);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          ListEmptyComponent={
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              Henüz Sepete Ürün Eklenmedi
            </Text>
          }
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
      </View>
      {cart?.length === 0 ? null : (
        <View style={styles.priceContainer}>
          <View style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
            <Text style={styles.total}>Toplam</Text>
            <Text style={styles.price}>{totalPrice.toFixed(2)}TL</Text>
            <Text style={styles.info}>Kargo Bedava</Text>
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Button
              title="Sepeti Onayla"
              onPress={() => dispatch(addCart(product))}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  total: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '300',
    color: Colors.PRIMARY,
  },
  info: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.GREEN,
  },
  priceContainer: {
    height: height * 0.08,
    borderTopWidth: 0.5,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.PRIMARY,
  },
});
