export type MarkerData = {
  id: number; // Уникальный идентификатор маркера
  latitude: number; // Широта
  longitude: number; // Долгота
  title: string; // Название маркера
  description: string; // Описание маркера
};

export const exampleMarkers: MarkerData[] = [
  {
    id: 1,
    latitude: 48.4801289,
    longitude: 135.07898,
    title: 'Маркер 1',
    description: 'Описание маркера 1',
  },
  {
    id: 2,
    latitude: 48.4841289,
    longitude: 135.06898,
    title: 'Маркер 2',
    description: 'Описание маркера 2',
  },
];
