export const dateOfOneDay = () => {
  const date = new Date();
  date.setTime(date.getTime() + 1 * 60 * 60 * 24 * 1000);
  return date;
};
