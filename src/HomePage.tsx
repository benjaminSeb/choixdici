import React from 'react';
import CalendarEvent from './CalendarEvent';
import Edito from './Edito';
import { ActivePageEnum } from './ActivePageEnum';

interface IHomePageProps {
  setActivePage: (param: ActivePageEnum) => void;
  activePage: string;
}

function HomePage(props: IHomePageProps) {

  return (
    <>
      <CalendarEvent/>
      <Edito/>
    </>
  );
}

export default HomePage;
