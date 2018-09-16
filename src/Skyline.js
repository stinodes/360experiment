import * as React from 'react';
import { StyleSheet, View, Text, Animated, VrButton } from 'react-360';

import { Room } from './Components/Navigation';
import { Pin } from './Components';

class Skyline extends React.Component<Props> {
    state = {
        animation: new Animated.Value(0),
    };

    animateBounce = () =>
        Animated.sequence([
            Animated.spring(this.state.animation, {
                toValue: 100,
                useNativeDriver: true,
            }),
            Animated.spring(this.state.animation, {
                toValue: 0,
                useNativeDriver: true,
            }),
        ]).start();

    render() {
        return (
            <Room
                roomName="skyline"
                image="../static_assets/thomas-more.jpg">
              <View style={styles.panel}>
                <View style={styles.column}>
                  <View style={styles.titleBox}>
                    <Text style={styles.title}>The Skyline</Text>
                  </View>
                  <View style={styles.bodyBox}>
                    <Text style={styles.body}>
                      This is a very beautiful skyline. Say hello to my big buddy.
                      Contrary to popular belief, Lorem Ipsum is not simply random
                      text. It has roots in a piece of classical Latin literature from
                      45 BC, making it over 2000 years old. Richard McClintock, a
                      Latin professor at Hampden-Sydney College in Virginia, looked up
                      one of the more obscure Latin words, consectetur, from a Lorem
                      Ipsum passage, and going through the cites of the word in
                      classical literature, discovered the undoubtable source. Lorem
                      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                      written in 45 BC. This book is a treatise on the theory of
                      ethics, very popular during the Renaissance. The first line of
                      Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                      in section 1.10.32. The standard chunk of Lorem Ipsum used since
                      the 1500s is reproduced below for those interested. Sections
                      1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                      Cicero are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation by H.
                      Rackham.
                    </Text>
                  </View>
                </View>
                <View style={styles.column}>
                  <Pin color="orange" to="street">
                    To Street
                  </Pin>
                  <Pin color="green" to="forest">
                    To Forest
                  </Pin>
                  <VrButton onClick={this.animateBounce}>
                    <Text>Animate</Text>
                  </VrButton>
                  <View style={{ flex: 1 }} />
                  <Animated.View
                      style={[
                          {
                              width: 100,
                              height: 100,
                              borderRadius: 50,
                              backgroundColor: 'pink',
                          },
                          {
                              transform: [
                                  {
                                      translateY: this.state.animation,
                                  },
                              ],
                          },
                      ]}
                  />
                </View>
              </View>
            </Room>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 16,
    },
    titleBox: {
        backgroundColor: 'white',
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
    },
    bodyBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 16,
    },
    body: {
        color: 'black',
        fontSize: 16,
    },
});

export { Skyline };
