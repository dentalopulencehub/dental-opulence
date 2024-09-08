import React, {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import Reducers from "./Reducers";
import { case_studies, services_page_data } from "../constants";
import { CaseStudyTypeProp, ServicePageDataType } from "../types";
import { useRouter } from "next/router";

interface Props {
  children?: ReactNode;
}

const initialState: any = {
  loading: false as boolean,
  selectedCase: case_studies[0] as CaseStudyTypeProp,

  pathToNavigate: null as string | null,
  servicePageData: null as ServicePageDataType | null,
  layoutRef: null as any,
  menuOpen: false as boolean,
};

export const GlobalContext = createContext(initialState);

GlobalContext.displayName = "Dental Opulence";

export const GlobalContextProvider = ({ children }: Props) => {
  const { query, pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/services") {
      const service = services_page_data.find(
        (service) => service.type === query.service
      );
      dispatch({ type: "SET_SERVICE_PAGE_DATA", payload: service });
    }
    dispatch({ type: "SET_MENU_STATE", menuOpen: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, query]);

  const [state, dispatch]: [any, Dispatch<any>] = useReducer(
    Reducers,
    initialState
  );

  const contextValue = {
    ...state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
