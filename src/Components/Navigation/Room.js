import * as React from 'react';
import { Consumer } from './Context';
import { Background } from '../Background';

type Props = {
  children: React.Node,
  roomName: string,
  image: string,
};
const Room = ({ roomName, children, image }: Props) => (
  <Consumer>
    {({ navigate, navigation, currentRoomName }) => {
      if (currentRoomName === roomName) {
        return <Background image={image}>{children}</Background>;
      }

      return null;
    }}
  </Consumer>
);

export { Room };
