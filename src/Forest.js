import * as React from 'react';
import { StyleSheet, View, Text, Animated, VrButton } from 'react-360';

import { Room } from './Components/Navigation';
import { Pin } from './Components';

class Forest extends React.Component<Props> {
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
                image="../static_assets/angela.jpg">
                <View style={styles.panel}>
                    <View style={styles.column}>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>The Forest</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <Pin color="orange" to="street">
                            To Street
                        </Pin>
                        <Pin color="green" to="skyline">
                            To Forest
                        </Pin>
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

export { Forest };
