import React, { useReducer, createContext } from "react";

import { Action } from "Types/Action";
import { App } from "Interfaces/App";
import { AppReducer } from "Reducers/App";

const initialState: App = {
  master: undefined,
  isLoading: false,
};

const AppContext = createContext<{
  state: App;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => {},
});

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
