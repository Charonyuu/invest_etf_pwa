import { useState, useEffect } from "react";

export default function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState([]);

  useEffect(() => {
    const localStorageValue = localStorage.getItem(key);
    if (localStorageValue) {
      setStoredValue(JSON.parse(localStorageValue));
    }
  }, [key]);

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
