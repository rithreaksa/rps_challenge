import React from "react";

export const useLocalStorageObjectStates = (key, defaultValue = {}) => {
  const [value, setValue] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
