import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import ProductItem from '../../components/products/productItem';

const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={favorites}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
