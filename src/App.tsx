import React from 'react';

import AppHeader from './components/AppHeader';
import Main from './components/AppMain';

interface AppProps {

};

type Props = AppProps;

class App extends React.Component<Props> {
  render() {
    return (
      <>
        <AppHeader />
        <Main />
      </>
    );
  }
}



export default App;
