import * as React from 'react';
import createReactContext from 'create-react-context';

const { Provider, Consumer } = createReactContext();

// const exampleRoom = {
//   image: 'link',
//   name: '',
//   id: '',
// };
// const exampleState = {
//   rooms: {
//     livingRoom: {
//       image: 'livingroom.png',
//       name: 'livingRoom',
//       id: 'livingRoom',
//     },
//     kitchen: {
//       image: 'kitchen.png',
//       name: 'kitchen',
//       id: 'kitchen',
//     },
//   },
//   navigation: [{ roomId: 'kitchen' }, { roomId: 'livingRoom' }],
// };

export { Provider, Consumer };
