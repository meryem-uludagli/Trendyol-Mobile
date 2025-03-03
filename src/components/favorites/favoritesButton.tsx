import {Heart} from 'iconsax-react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {ProductItemProps} from '../../models/ui/productItemProps';

Heart;
const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {product.isFavorite ? (
        <Heart size={20} color={Colors.PRIMARY} variant="Bold" />
      ) : (
        <Heart size={20} color={Colors.PRIMARY} />
      )}
    </TouchableOpacity>
  );
};
export default FavoritesButton;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 0.072,
    height: width * 0.072,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
});
