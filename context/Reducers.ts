/* eslint-disable import/no-anonymous-default-export */
import { REDUCERS, ActionType } from "../types";

export default (state: any, action: ActionType) => {
  const { payload } = action;

  switch (action.type) {
    case REDUCERS.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case REDUCERS.SET_SELECTED_CASE:
      return {
        ...state,
        selectedCase: payload,
      };

  

    case REDUCERS.SET_PATH_TO_NAVIGATE:
      return {
        ...state,
        pathToNavigate: payload,
      };


    case REDUCERS.SET_SERVICE_PAGE_DATA:
      return {
        ...state,
        servicePageData: payload,
      };

    case REDUCERS.SET_MENU_STATE: 
      return {
        ...state,
        menuOpen: payload
      }

    default:
      return state;
  }
};
