import React from 'react';
import { StyleSheet, Text, View, VrButton } from 'react-360';
import rooms from '../data/rooms';
import { Background, Pin, World } from './Components';
import { BackButton, Consumer, Room } from './Components/Navigation';
import { Skyline } from './Skyline';

class App extends React.Component {
  render() {
    return (
      <World initialRoom="forest">
        <View
          style={{
            width: 1000,
            height: 600,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Room
            roomName="forest"
            image="https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
            <Pin color="green" to="skyline">
              To Skyline
            </Pin>
          </Room>

          <Skyline />

          <Room
            roomName="street"
            image="https://d36tnp772eyphs.cloudfront.net/blogs/1/2006/11/360-panorama-matador-seo.jpg">
            <Pin color="blue" to="forest">
              To Forest
            </Pin>
          </Room>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
          <BackButton />
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
