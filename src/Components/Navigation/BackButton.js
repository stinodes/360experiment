import * as React from 'react';
import { Consumer } from './Context';
import { Text, VrButton, StyleSheet, Animated } from 'react-360';

class BackButton extends React.Component<Props> {
  state = {
    animation: new Animated.Value(0),
  };
  onEnter = () => {
    Animated.spring(this.state.animation, { toValue: 1 }).start();
  };
  onExit = () => {
    Animated.spring(this.state.animation, { toValue: 0 }).start();
  };
  render() {
    const { animation } = this.state;
    return (
      <Consumer>
        {({ goBack, canGoBack }) => (
          <VrButton
            onClick={goBack}
            onExit={this.onExit}
            onEnter={this.onEnter}>
            <Animated.Text
              style={[
                styles.text,
                {
                  transform: [
                    {
                      translateX: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 20],
                      }),
                    },
                    {
                      scale: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.2],
                      }),
                    },
                  ],
                },
              ]}>
              Back
            </Animated.Text>
          </VrButton>
        )}
      </Consumer>
    );
  }
}

export { BackButton };

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { x: 0, y: 1 },
    textShadowRadius: 2,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
