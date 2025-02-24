import {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
const Home = () => {
  useEffect(() => {
    getRequest({}, PRODUCTS_URL.ALL_PRODUCTS)
      .then(data => {
        console.log(data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({});
