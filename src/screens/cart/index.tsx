import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const Cart: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
