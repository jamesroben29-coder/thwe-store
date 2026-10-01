import { useContext } from "react";
import { SearchContext } from "./SearchContextValue";

export const useSearch = () => useContext(SearchContext);
