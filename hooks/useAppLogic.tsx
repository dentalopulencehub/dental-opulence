  
  
  import {
  setActiveStep,
  setSelectedOptions,
  setQuestionsAndAnswers,
} from "../lib/state/features/FormSlice";
import { useDispatch, useSelector } from "react-redux";
import { helpSelect } from "../constants";
import { RootState } from "../lib/state/store";
import { useState } from "react";






 const useAppLogic = () => {
  const [visitedSteps, setVisitedSteps] = useState<string[]>([]);  
 

  const dispatch = useDispatch();
  const activeStep = useSelector(
    (state: RootState) => state.formReducer.activeStep
  );

  const selectedOptions = useSelector(
    (state: RootState) => state.formReducer.selectedOptions
  );

  const questionsAndAnswers = useSelector(
    (state: RootState) => state.formReducer.questionsAndAnswers
  );

 


  const handleOptionSelect = (option: string, title?: string) => {
    if (title === undefined) {
      console.error("Title is undefined for option:", option);
      return;
    }
    const newQuestionAndAnswer = { question: title, answer: option };

    dispatch(
      setQuestionsAndAnswers([...questionsAndAnswers, newQuestionAndAnswer])
    );

    dispatch(setSelectedOptions([...selectedOptions, option]));
  };
  // console.log(questionsAndAnswers);



  const handleStepChange = (step: string) => {
    setVisitedSteps([...visitedSteps, step]);
    dispatch(setActiveStep(step));
  };



  //----------------- prev button -------------
  const handleBackButtonClick = () => {
    const visitedIndex = visitedSteps.indexOf(activeStep);

    if (visitedIndex > 0) {
      const prevStep = visitedSteps[visitedIndex - 1];
      dispatch(setActiveStep(prevStep));

      const updatedVisitedSteps = visitedSteps.slice(0, visitedIndex);
      setVisitedSteps(updatedVisitedSteps);

      const updatedOptions = [...selectedOptions];
      updatedOptions.pop();
      dispatch(setSelectedOptions(updatedOptions));
    }
  };
















   return  [handleBackButtonClick, handleStepChange,handleOptionSelect]
 }
 
 export default useAppLogic
