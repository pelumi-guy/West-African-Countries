import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
    children: PropTypes.object
}

export default SearchContext;