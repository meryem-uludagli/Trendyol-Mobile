import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetHeader from '../components/widgets/widgetHeader';

const BestSeller = () => {
  return (
    <View>
      <WidgetHeader title="Çok Satan Ürünler" />
      <Text>BestSeller</Text>
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({});
