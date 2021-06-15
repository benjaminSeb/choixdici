export interface IEvent {
  name: string;
  location: string;
  date: Date;
}

export const getEventsOfDay = (date?: Date): IEvent[] => {
  return [event1, event2, event3];
};

const event1: IEvent = {
  name: "Festival",
  location: "Marne-La-Vallée",
  date: new Date(),
};

const event2: IEvent = {
  name: "Un évènement avec un long bien long",
  location: "Rennes",
  date: new Date(),
};

const event3: IEvent = {
  name: "3e evènement",
  location: "inconnu",
  date: new Date(),
};
