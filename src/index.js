import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import App from './App';
import store from './store';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.white,
    primary2Color: Colors.indigo700,
    accent1Color: Colors.fullBlack,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.fullBlack
  },
  appBar: {
    height: 50,
  },
});

ReactDOM.render(
  (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root')
);
