import * as React from 'react';
import { Provider } from './Context';

type Props = {
  initialRoom: string,
  children: React.Node,
};

type NavigationEntry = {
  roomName: string,
};
type State = {
  navigation: NavigationEntry[],
};

class World extends React.Component<Props, State> {
  state = {
    navigation: [],
  };
  constructor(props) {
    super(props);

    const { initialRoom, rooms } = props;

    const initialNavigation = { roomName: initialRoom };

    this.state = {
      navigation: [initialNavigation],
    };
  }

  currentRoomName = () => {
    return this.state.navigation[this.state.navigation.length - 1];
  };


  navigate = (roomName: string) => {
    this.setState(({ navigation }) => ({
      navigation: [...navigation, { roomName }],
    }));
  };

  setNavigation = (newNavigation: NavigationEntry[]) =>
    this.setState({ navigation: newNavigation });

  render() {
    const { children } = this.props;

    const { roomName } = this.currentRoomName();
    console.log(roomName);
    console.log(this.state.navigation);
    const value = {
      currentRoomName: roomName,
      navigation: this.state.navigation,
      navigate: this.navigate,
      setNavigation: this.setNavigation,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export { World };
