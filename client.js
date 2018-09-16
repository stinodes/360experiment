// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Module } from 'react-360-web';

class MyModule extends Module {
    constructor(ctx) {
        super('MyModule'); // Makes this module available at NativeModules.MyModule
        this._ctx = ctx;
    }
    // This method will be exposed to the React app
    doSomething() {
        console.log(this._ctx);
        console.log("hoe te fuck kan ik nieuwe surface toevoegen r360 const? ");
    }

}

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
      nativeModules: [
          ctx => new MyModule(ctx),
      ]
  });


    const myFlatSurface = new Surface(
        300, /* width */
        600, /* height */
        Surface.SurfaceShape.Flat /* shape */
    );


// To rotate a panel 30 degrees below the horizon:
    myFlatSurface.setAngle(
        Math.PI / 2, /* horiz angle */
        0 /* vertical angle */
    );



    r360.renderToSurface(
        r360.createRoot('Apin'),
        myFlatSurface,
    );



  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('hello360', {
      /* initial props */
    }),
    r360.getDefaultSurface(),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
