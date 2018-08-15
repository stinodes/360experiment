import * as React from 'react';
import { VrButton, StyleSheet, View, Text, Environment } from 'react-360';
import { Link } from './Navigation/Link';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Pin = ({ children, to, color }: Props) => (
  <Link to={to}>
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>{children}</Text>
    </View>
  </Link>
);

export { Pin };
