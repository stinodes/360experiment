import React from 'react'
import { AppRegistry, View,} from 'react-360';
import { App } from './src/App.js';
import { Apin } from './src/Apin';
import { withAppContext } from './src/Components/Navigation/Context';

/*const MeditationApp = withAppContext(() => (
    <View style={{
        transform: [{ translate: [0, 0, -2] }]
    }}>
        <AppContent />
    </View>
));*/

export default App;
AppRegistry.registerComponent('hello360', () => App);
AppRegistry.registerComponent('Apin', () => Apin);