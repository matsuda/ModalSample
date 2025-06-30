import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ModalWithStackScreen() {
  return (
    <View style={styles.container}>
      <Text>ModalWithStack Screen</Text>
      <Link href="/modal-with-stack/nested" style={styles.link}>
        Push to /modal-with-stack/nested
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
