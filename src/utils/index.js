export const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
};
  
export const getDayOfTheYear = () => {
  const date = new Date();
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
};

export const getDayKey = () => {
  const date = new Date();
  let year = date.getFullYear();
  return `day-${getDayOfTheYear()}-${year}`;
};