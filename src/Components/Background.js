import * as React from 'react';
import { Environment } from 'react-360';

class Background extends React.Component<Props> {
  componentDidMount() {
    Environment.setBackgroundImage({ uri: this.props.image });
  }
  render() {
    return this.props.children;
  }
}

export { Background };
