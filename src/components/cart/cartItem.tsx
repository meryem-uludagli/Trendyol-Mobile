import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/constants';
import {cartItemProps} from '../../models/ui/cartItemProps';
import {Colors} from '../../theme/colors';
import Delivery from '../badges/delivery';
import FreeCargo from '../badges/freeCargo';
import DisCount from '../badges/disCount';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';

const CartItem: React.FC<cartItemProps> = ({product}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTDETAIL, {
          productId: product.id,
        })
      }
      style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <View>
          <Text style={styles.title}>{product?.title}</Text>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Delivery />
          <FreeCargo />
          <DisCount />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.quantity}>1</Text>
          </View>

          <View>
            <Text style={styles.price}>{product?.price} TL</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.PRIMARY,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.PRIMARY,
  },
});
