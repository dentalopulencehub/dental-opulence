import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  activeStep: string; 
  selectedOptions: string[];  
  questionsAndAnswers:{ question: string, answer: string }[], 
  
}

const initialState: StepState = {
  activeStep: "formOne",  
  selectedOptions: [],   
  questionsAndAnswers:[], 
};

const formSlice = createSlice({
  name: "step",  
  initialState, 
  reducers: {
    setActiveStep(state, action: PayloadAction<string>) {
      state.activeStep = action.payload; 
    },
    setSelectedOptions(state, action: PayloadAction<string[]>) {
      state.selectedOptions = action.payload; 
    },

    setQuestionsAndAnswers(state, action: PayloadAction< { question: string; answer: string }[]> ) {
      state.questionsAndAnswers = action.payload; 
    },
  },
});

export const { setActiveStep, setSelectedOptions, setQuestionsAndAnswers } = formSlice.actions;
export default formSlice.reducer;
