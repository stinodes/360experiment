import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton, NativeModules} from 'react-360'

const MyModule = NativeModules.MyModule.doSomething;


MyModule();

class PinButton extends React.Component {
    state = {
        hover: false,
    };

    render() {
        return (
            <VrButton>
                <Text>Hey</Text>
            </VrButton>
        );
    }
}

const Apin = props => {
    postMessage({ type: "newComponent"});
    return (
        <View style={styles.wrapper}>

                <PinButton/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: 300,
        height: 600,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: '#303050',
        borderWidth: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    postButton: {
        height: 120,
        backgroundColor: '#000000',
        overflow: 'hidden',
    },
    postButtonInfo: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'column',
    },
    postButtonPreview: {
        width: '100%',
        height: 225,
    },
    postButtonInfoHover: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    postButtonLabel: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: 10,
        paddingVertical: 2,
        alignSelf: 'flex-start',
    },
    postButtonName: {
        fontSize: 24,
    },
    postButtonAuthor: {
        fontSize: 16,
    }
});



export { Apin };