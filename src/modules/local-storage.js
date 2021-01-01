import { useEffect, useState } from "react";

export const useLocalStorageObjectStates = (key, defaultValue = {}) => {
  const [value, setValue] = useState (
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect (() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorageObjectStates