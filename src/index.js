import React from "react";
import ReactDOM from "react-dom";
import NextApp from './NextApp';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <NextApp/>
    </AppContainer>,
     
    document.getElementById('root')

  );
};

// Do this once
registerServiceWorker();

// Render once
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./NextApp', () => {
    render(NextApp);
  });
}
