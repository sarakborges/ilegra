import { App } from "Interfaces/App";
import { Action } from "Types/Action";

export const AppReducer = (state: App, action: Action) => {
  switch (action.type) {
    case "SET_MASTER": {
      return { ...state, master: action.data };
    }

    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.data };
    }

    default: {
      throw new Error(`Unknown type ${action.type} reducer on AppReducer`);
    }
  }
};
