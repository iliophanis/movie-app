import { useEffect } from "react";
import { useSearch } from "contexts/SearchProvider";

export const useDebounce = (value: string, delay: number = 500) => {
 const { setSearch } = useSearch();
 useEffect(() => {
  const handler: NodeJS.Timeout = setTimeout(() => {
   setSearch(value);
  }, delay);

  return () => {
   clearTimeout(handler);
  };
 }, [value, setSearch, delay]);
};
