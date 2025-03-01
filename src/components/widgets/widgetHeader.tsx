import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WidgetHeaderProps} from '../../models/ui/widgetProps';

const WidgetHeader: React.FC<WidgetHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>{title}</Text>
    </View>
  );
};

export default WidgetHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
