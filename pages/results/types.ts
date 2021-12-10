type resultsFromFetch = {
  list: listType[];
  city: object;
};

type listType = {
  clouds: object;
  dt: number;
  dt_txt: string;
  main: object;
  sys: object;
  visibility: number;
  weather: object;
  wind: object;
};

export type { resultsFromFetch, listType };
