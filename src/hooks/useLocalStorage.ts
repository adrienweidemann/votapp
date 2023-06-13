import { useState } from "react";

export const useLocalStorage = <T>(keyName: string, defaultValue: null) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value: string | null = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T): void => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue] as const;
};
