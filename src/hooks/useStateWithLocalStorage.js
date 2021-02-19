import React from "react";
import PropTypes from "prop-types";

const useStateWithLocalStorage = (localStorageKey) => {
  const [items, setItems] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
  }, [items, localStorageKey]);

  return [items, setItems];
};

useStateWithLocalStorage.propTypes = {
  useStateWithLocalStorage: PropTypes.func.isRequired
};

export default useStateWithLocalStorage;
