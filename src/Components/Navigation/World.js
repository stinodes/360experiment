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
  canGoBack = () => this.state.navigation.length !== 1;

  navigate = (roomName: string) => {
    this.setState(({ navigation }) => ({
      navigation: [...navigation, { roomName }],
    }));
  };

  goBack = () => {
    this.setState(state => {
      if (!this.canGoBack()) return state;
      return {
        navigation: state.navigation.filter(
          (value, i) => i !== state.navigation.length - 1,
        ),
      };
    });
  };

  setNavigation = (newNavigation: NavigationEntry[]) =>
    this.setState({ navigation: newNavigation });

  render() {
    const { children } = this.props;

    const { roomName } = this.currentRoomName();
    console.log(this.state.navigation);
    const value = {
      currentRoomName: roomName,
      canGoBack: this.canGoBack(),
      navigation: this.state.navigation,
      navigate: this.navigate,
      goBack: this.goBack,
      setNavigation: this.setNavigation,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export { World };
