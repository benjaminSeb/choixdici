import React, { useState } from 'react';
import { ActivePageEnum } from './ActivePageEnum';
import HomePage from './HomePage';
import MenuBar from './MenuBar';
import Footer from './Footer';

function App() {
  const [activePage, setActivePage] = useState(ActivePageEnum.HOME);

  return (
    <>
      <MenuBar 
        setActivePage={setActivePage}
        activePage={activePage}
      />
      {activePage === ActivePageEnum.HOME &&
        <HomePage
          setActivePage={setActivePage}
          activePage={activePage}
        />
      }
      <Footer/>
    </>
  );
}

export default App;
