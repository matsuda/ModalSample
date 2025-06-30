import { StyleSheet, Text, View } from 'react-native';

export default function NestedScreen() {
  return (
    <View style={styles.container}>
      <Text>Nested Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
