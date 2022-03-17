import {
 createContext,
 Dispatch,
 SetStateAction,
 useContext,
 useMemo,
 useState,
} from "react";

type SearchContextProps = {
 setSearch: Dispatch<SetStateAction<string>>;
 search: string;
};

const SearchContext = createContext<SearchContextProps>({
 setSearch: () => {},
 search: "",
});

type IAuthProviderProps = {
 children: any;
};

export const SearchProvider = ({ children }: IAuthProviderProps) => {
 const [search, setSearch] = useState("");
 const providerValue = useMemo(
  () => ({
   search,
   setSearch,
  }),
  [search, setSearch]
 );
 return (
  <SearchContext.Provider value={providerValue}>
   {children}
  </SearchContext.Provider>
 );
};

export const useSearch = () => useContext(SearchContext);

export default SearchProvider;
