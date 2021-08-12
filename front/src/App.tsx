import React, { ReactElement, useState } from 'react';
import { ActivePageEnum } from './ActivePageEnum';
import AgendaPage from './AgendaPage';
import Footer from './Footer';
import HomePage from './HomePage';
import MenuBar from './MenuBar';

function App() {
  const [activePage, setActivePage] = useState(ActivePageEnum.HOME);

  const getContent = (): ReactElement => {
    switch(activePage) { 
      case ActivePageEnum.HOME: { 
        return (<HomePage
          pageProps={{setActivePage}}
        />); 
      } 
      case ActivePageEnum.AGENDA: { 
          return (<AgendaPage
            pageProps={{setActivePage}}
          />);
      } 
      default: { 
        return (<HomePage
          pageProps={{setActivePage}}
        />);  
      } 
    } 
  }

  return (
    <>
      <MenuBar 
        setActivePage={setActivePage}
        activePage={activePage}
      />
      {getContent()}
      <Footer/>
    </>
  );
}

export default App;
