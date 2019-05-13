export const getMarkedDates = (
  surveyData: any,
  selectedDate: string,
) => {
  if (!surveyData) {
    return {};
  }
  const surveyDates = Object.keys(surveyData);

  const markedDates =
    surveyDates &&
    surveyDates.reduce(
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
