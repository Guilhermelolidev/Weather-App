import { useState, useMemo } from "react";

const getListOfDaysAvailable = (list: { dt_txt: string }[]) =>
  list.map((itemList) => itemList.dt_txt.split(" ")[0]);

const useResultsAndBuildArray = ({ list, cityInfo }) => {
  const listOfDaysAvailable = getListOfDaysAvailable(list);

  const uniqueDays = useMemo(
    () =>
      listOfDaysAvailable.filter((elem, index, self) => {
        return index === self.indexOf(elem);
      }),
    [listOfDaysAvailable]
  );

  const weatherPeriodsGroupedByDay = uniqueDays.map((unique: string) => {
    return {
      [unique]: list.filter((itemList: { dt_txt: string | any[] }) => {
        if (itemList.dt_txt.includes(unique)) {
          return itemList;
        }
        return;
      }),
    };
  });

  return { weatherPeriodsGroupedByDay };
};

export default useResultsAndBuildArray;
