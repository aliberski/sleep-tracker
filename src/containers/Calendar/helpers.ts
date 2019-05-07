export const getMarkedDates = (
  surveyData: any,
  selectedDate: string,
) => {
  const surveyDates = Object.keys(surveyData);

  const markedDates = surveyDates.reduce(
    (prev: any, date: string) => ({
      ...prev,
      [date]: {
        marked: true,
      },
    }),
    {},
  );

  markedDates[selectedDate] = {
    selected: true,
    marked: surveyDates.includes(selectedDate),
  };

  return markedDates;
};
