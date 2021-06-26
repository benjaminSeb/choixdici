export interface IEvent {
  name: string;
  location: string;
  date: string;
}

export const getEventsOfDay = (date?: Date): IEvent[] => {
  return [event1, event2, event3, event4, event5, event6];
};

const event1: IEvent = {
  name: "Festival",
  location: "Marne-La-Vallée",
  date: "lundi",
};

const event2: IEvent = {
  name: "Un évènement avec un long bien long",
  location: "Rennes",
  date: "lundi",
};

const event3: IEvent = {
  name: "3e evènement",
  location: "inconnu",
  date: "lundi",
};

const event4: IEvent = {
  name: "3e evènement",
  location: "inconnu",
  date: "lundi",
};

const event5: IEvent = {
  name: "3e evènement",
  location: "inconnu",
  date: "lundi",
};

const event6: IEvent = {
  name: "3e evènement",
  location: "inconnu",
  date: "lundi",
};
