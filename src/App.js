import React from 'react';
import { StyleSheet, Text, View, VrButton} from 'react-360';
import { Background, Pin, World } from './Components';
import { Consumer, Room } from './Components/Navigation';
import { Skyline } from './Skyline';
import { Forest } from './Forest';
import rooms from "../data/rooms";


class App extends React.Component {
  render() {
    return (
      <World initialRoom="forest">
        <View
          style={{
            width: 720,
            height: 600,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Forest />

          <Skyline />

          <Room
            roomName="street"
            image="static_assets/jeans.jpg">
            <Pin color="blue" to="forest">
              To Forest
            </Pin>
          </Room>

          <Consumer>
            {({ setNavigation, navigation }) =>
              navigation.length !== 1 && (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}>
                  <VrButton
                    onClick={() => {
                      if (navigation.length === 1) return null;

                      setNavigation(
                        navigation.filter(
                          (value, i, arr) => i !== arr.length - 1,
                        ),
                      );
                    }}>
                    <Text style={{ color: 'black' }}>Back</Text>
                  </VrButton>
                </View>
              )
            }
          </Consumer>
        </View>
      </World>
    );
  }
}

export { App };

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    borderColor: '#639dda',
    borderWidth: 2,
    flex: 1,
    alignSelf: 'stretch',
  },
  greeting: {
    fontSize: 30,
  },
  pinContainer: {
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
