import React from 'react';
import CalendarEvent from './CalendarEvent';
import Edito from './Edito';
import { ActivePageEnum } from './ActivePageEnum';
import FindCategory from './FindCategory';

interface IHomePageProps {
  pageProps: {
    setActivePage: (param: ActivePageEnum) => void;
  };
}

function HomePage(props: IHomePageProps) {

  return (
    <>
      <CalendarEvent/>
      <Edito/>
      <FindCategory/>
    </>
  );
}

export default HomePage;
