import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetHeader from '../components/widgets/widgetHeader';

const PopularProducts = () => {
  return (
    <View>
      <WidgetHeader title="Poüler Ürünler" />
      <Text>PopularProducts</Text>
    </View>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({});
