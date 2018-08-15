import * as React from 'react';
import { VrButton } from 'react-360';
import { Consumer } from './Context';

type Props = {
  to: string,
};
const Link = ({ to, ...props }: Props) => (
  <Consumer>
    {({ navigate }) => <VrButton {...props} onClick={() => navigate(to)} />}
  </Consumer>
);

export { Link };
