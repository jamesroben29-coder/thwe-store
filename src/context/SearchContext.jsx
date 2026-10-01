import { createContext, useContext, useState } from "react"

const SearchContext = createContext(); 

export const SearchProvider = ({children}) => {

    const [ search , setSearch ] = useState("");
    const [ category, setCategory ] = useState("All");
    const [ sort, setSort ] = useState("");

    return(
        <SearchContext.Provider value={{search , setSearch, category, setCategory, sort , setSort}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext);