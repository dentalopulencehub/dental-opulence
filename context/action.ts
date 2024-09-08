import { Dispatch } from "react";
import { CaseStudyTypeProp, REDUCERS, TestiVideoStudyTypeProp } from "../types";
import { DispatchType } from "../interface";

export const handleSetSelectedCaseStudy = (
  dispatch: Dispatch<DispatchType>,
  payload: CaseStudyTypeProp
) => {
  dispatch({
    type: REDUCERS.SET_SELECTED_CASE,
    payload,
  });
};

export const handleSetSelectedVideoTestiCaseStudy = (
  dispatch: Dispatch<DispatchType>,
  payload: TestiVideoStudyTypeProp
) => {
  dispatch({
    type: REDUCERS.SET_SELECTED_VIDEO_TESTI,
    payload,
  });
};


export const handleSetPathToNavigate = (
  dispatch: Dispatch<DispatchType>,
  payload: string | null
) => {
  dispatch({
    type: REDUCERS.SET_PATH_TO_NAVIGATE,
    payload,
  });
};

export const handleSetMenuState = (
  dispatch: Dispatch<DispatchType>,
  payload: boolean
) => {
  dispatch({ type: REDUCERS.SET_MENU_STATE, payload });
};
