import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CounterProps} from '../../models/ui/counterProps';
import {Colors} from '../../theme/colors';
import {Add, Minus} from 'iconsax-react-native';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../../store/slice/cartSlice';

const Counter: React.FC<CounterProps> = ({quantity, product}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(decreaseQuantity(product))}>
        <Minus size="32" color="#FF8A65" />
      </TouchableOpacity>

      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(increaseQuantity(product))}>
        <Add size="32" color="#FF8A65" />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    borderRadius: 100,
    flexDirection: 'row',
    padding: 5,
  },
  quantityContainer: {
    backgroundColor: Colors.SOFTORANGE,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginHorizontal: 5,
  },
  quantity: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: '500',
  },
});
