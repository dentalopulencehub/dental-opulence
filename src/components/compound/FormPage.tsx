import { useContext } from "react";
import {
  setActiveStep,
  setSelectedOptions,
  setQuestionsAndAnswers,
} from "../../../lib/state/features/FormSlice";
import { customerSelect, helpSelect } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { GlobalContext } from "../../../context/GlobalContext";
import { RootState } from "../../../lib/state/store";
import Image from "next/image";
import {
  FormOne,
  FormTwo,
  Commercial,
  Residential,
  ResidentialFormOne,
  ResidentialFormTwo,
  EnSuitForm,
  CommercialFormOne,
  CommercialFormTwo,
  CommercialFormThree,
  CommercialFormFour,
  CommercialFormFive,
  CommercialFormSix,
  CheckPointFormOne,
  CheckPointFormTwo,
  CheckPointFormThree,
  CheckPointFormFour,
  CheckPointFormFive,
  CheckPointFormSix,
  CheckPointFormSeven,
  ContactForm,
  CombinedForm,
} from "./Form";
import { useState } from "react";
import arrow_hex_1 from "../../../assets/images/arrow-left-light-large.svg";
import cancel from "../../../assets/images/cancel.svg";
import { handleSetPathToNavigate } from "../../../context/action";
import { useRouter } from "../../../node_modules/next/router";
import FormThree from "./Form/FormThree";
import CommercialForm from "./Form/commercialForms/Commercial";
import FormSix from "./Form/FormSix";
import FormSuccess from "./Form/FormSuccess";

const Page = () => {
  const { dispatch: reactContextDispatch } = useContext(GlobalContext);

  const router = useRouter();
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

  const handleClearOptions = () => {
    dispatch(
      setQuestionsAndAnswers([])
    );
    dispatch(setSelectedOptions([]));
  }
  const handleOptionDeselect = (option: string, title?: string) => {
    if (title === undefined) {
      console.error("Title is undefined for option:", option);
      return;
    }

    const newOptions = selectedOptions.filter(item => item != option)

    dispatch(setSelectedOptions(newOptions));
  };

  const handleStepChange = (step: string) => {
    setVisitedSteps([...visitedSteps, step]);
    dispatch(setActiveStep(step));
  };

  // //----------------- prev button -------------

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
    } else {
      dispatch(setActiveStep("formOne"));
      setVisitedSteps([]);
      dispatch(setSelectedOptions([]));
    }
  };

  const returnProgressBarWidth = (): ReturnType<() => string> => {
    switch (activeStep) {
      case "formOne":
        return "w-[25%]";
      case "formTwo":
        return "w-[50%]";
      case "formThree":
        return "w-[75%]";
      case "lastForm":
        return "w-full";
      default:
        return "w-0";
    }
  };

  return (
    // <section className="bg-black relative  overflow-hidden rounded-3xl w-full h-full  md:px-4">
    <>
      <section className="relative bg-[#100E10] w-full min-h-[100vh] h-full overflow-hidden  sm:pt-10 lg:px-[100px] sm:px-[40px] px-[20px] flex flex-col items-center justify-between mx-auto my-auto">
        <div className="w-full h-[100vh] absolute flex items-center justify-center">
          <svg
            width="1053"
            height="545"
            viewBox="0 0 1053 545"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.02">
              <path
                d="M0 1.35739H202.961C238.646 1.31262 273.991 8.29277 306.973 21.8987C339.955 35.5046 369.928 55.4693 395.178 80.6512C420.427 105.833 440.458 135.738 454.125 168.656C467.791 201.574 474.826 236.86 474.826 272.495C474.826 344.405 446.219 413.37 395.298 464.218C344.378 515.066 275.314 543.632 203.302 543.632H0V1.35739Z"
                fill="white"
              />
              <path
                d="M780.112 545C930.824 545 1053 422.998 1053 272.5C1053 122.002 930.824 0 780.112 0C629.4 0 507.223 122.002 507.223 272.5C507.223 422.998 629.4 545 780.112 545Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        {/* selected options */}{" "}
        {/* <div className="hidden  sm:flex flex-wrap items-center gap-5 sm:mt-16 md:mt-0 border-2 border-red-500"> */}
        <div className="flex w-full  items-center mt-4 md:mt-12 relative justify-between">
          {visitedSteps.length == 0 ? (
            <nav className=" mix-blend-difference h-[40px] md:h-[70px] bg-transparent cursor-pointer  flex items-center justify-between  ">
              <div
                className=""
                onClick={() =>
                  handleSetPathToNavigate(reactContextDispatch, "/")
                }
              >
                <div className="nav-logo-wrapper">
                  <svg
                    width="77"
                    height="40"
                    viewBox="0 0 77 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      y="0.166748"
                      width="77"
                      height="39.6667"
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_929_7920"
                          transform="matrix(0.00232558 0 0 0.00451436 0 -0.00335156)"
                        />
                      </pattern>
                      <image
                        id="image0_929_7920"
                        width="430"
                        height="223"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
              </div>
            </nav>
          ) : (
            <div
              className="arrow-main absolute left-0 border p-[5px] md:p-[22px] flex items-center justify-center w-[40px] h-[40px] md:w-[84px] md:h-[84px] rounded-full sm:scale-[1] scale-[0.5]"
              data-state="1"
              onClick={handleBackButtonClick}
            >
              <div className="arrow-wrapper ">
                <span className="arrow-span h-[20px] md:h-[40px] ">
                  <Image
                    src={arrow_hex_1}
                    alt="Arrow icon with hexagon tip"
                    className="arr-1 w-10  a-btn-1"
                    width={40}
                    height={40}
                  />

                  <Image
                    src={arrow_hex_1}
                    alt="Arrow icon with hexagon tip"
                    className="arr-2 w-10  a-btn-2"
                    width={40}
                    height={40}
                  />
                </span>
              </div>
            </div>
          )}
          <div className="scroll w-full md:w-4/5 mx-auto flex md:flex-wrap items-center justify-center gap-2 md:gap-5 z-0 relative md:top-0 top-[55px] overflow-x-auto cursor-grab md:cursor-pointer">
            {selectedOptions.map((option, index) => (
              <button
                type="button"
                key={index}
                className="contact-bg bg-[#2D2D2D] border border-[#454545] thin flex items-center gap-2 md:text-sm text-[9px] px-3 py-2 text-white rounded-full"
                data-aos="fade-up-right"
              >
                {option}
              </button>
            ))}
          </div>
          <div
            className="arrow-main absolute  right-0 border p-[22px] w-[84px] h-[84px] sm:scale-[1] scale-[0.5] rounded-full"
            data-state="1"
            onClick={() => router.back()}
          >
            <div className="arrow-wrapper ">
              <span className="arrow-span">
                <Image
                  src={cancel}
                  alt="Arrow icon with hexagon tip"
                  className="arr-1 w-10  a-btn-1"
                  width={30}
                  height={30}
                />

                <Image
                  src={cancel}
                  alt="Arrow icon with hexagon tip"
                  className="arr-2 w-10  a-btn-2"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
        </div>
        <section className="w-full sm:w-4/5  sm:h-3/6 absolute top-[55%] sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between ">
          <section className="w-full h-full flex flex-col items-center justify-center">
            {activeStep === "formOne" && (
              <FormOne
                helpSelect={customerSelect}
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formTwo" && (
              <FormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect} handleOptionDeselect={function (option: string, title: string): void {
                  throw new Error("Function not implemented.");
                } }              />
            )}
            {activeStep === "formThree" && (
              <FormThree
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect} handleOptionDeselect={function (option: string, title: string): void {
                  throw new Error("Function not implemented.");
                } }              />
            )}
            {/* {activeStep === "formThree" && (
              <Commercial
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )} */}
            {activeStep === "formFour" && (
              <CommercialForm
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
                handleOptionDeselect={handleOptionDeselect}
              />
            )}

            {activeStep === "formFive" && (
              <Residential
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
                handleOptionDeselect={handleOptionDeselect}
              />
            )}
             {activeStep === "formCombined" && (
              <CombinedForm
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
                handleOptionDeselect={handleOptionDeselect}
              />
            )}
              {activeStep === "formSix" && (
              <FormSix
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
                handleOptionDeselect={handleOptionDeselect}
              />
            )}
              {activeStep === "successForm" && (
              <FormSuccess
                handleStepChange={handleStepChange}
                handleOptionSelect={handleClearOptions}
                handleOptionDeselect={handleOptionDeselect}
              />
            )}
            {/*
            {activeStep === "formFive" && (
              <ResidentialFormOne
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "formSix" && (
              <ResidentialFormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formSeven" && (
              <EnSuitForm
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

        
            {activeStep === "formEight" && (
              <CommercialFormOne
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formNine" && (
              <CommercialFormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "formTen" && (
              <CommercialFormThree
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
           
            {activeStep === "form11" && (
              <CommercialFormFour
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "form12" && (
              <CommercialFormFive
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
            {activeStep === "form13" && (
              <CommercialFormSix
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}
           
            {activeStep === "checkPointFormOne" && (
              <CheckPointFormOne
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormTwo" && (
              <CheckPointFormTwo
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormThree" && (
              <CheckPointFormThree
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormFour" && (
              <CheckPointFormFour
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormFive" && (
              <CheckPointFormFive
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormSix" && (
              <CheckPointFormSix
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )}

            {activeStep === "checkPointFormSeven" && (
              <CheckPointFormSeven
                handleStepChange={handleStepChange}
                handleOptionSelect={handleOptionSelect}
              />
            )} */}
          </section>

          <section>{activeStep === "lastForm" && <ContactForm handleStepChange={handleStepChange} />}</section>

          {/* progress bar component */}
        </section>
        {/* back button */}
        <div className="md:relative mb-10 justify-between items-center flex  w-full sm:mb-12 md:mb-3">
         
          <div className="flex gap-8 w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.4645 22.9115C27.4645 23.3615 27.3645 23.824 27.152 24.274C26.9395 24.724 26.6645 25.149 26.302 25.549C25.6895 26.224 25.0145 26.7115 24.252 27.024C23.502 27.3365 22.6895 27.499 21.8145 27.499C20.5395 27.499 19.177 27.199 17.7395 26.5865C16.302 25.974 14.8645 25.149 13.4395 24.1115C12.002 23.0615 10.6395 21.899 9.33945 20.6115C8.05195 19.3115 6.88945 17.949 5.85195 16.524C4.82695 15.099 4.00195 13.674 3.40195 12.2615C2.80195 10.8365 2.50195 9.47402 2.50195 8.17402C2.50195 7.32402 2.65195 6.51152 2.95195 5.76152C3.25195 4.99902 3.72695 4.29902 4.38945 3.67402C5.18945 2.88652 6.06445 2.49902 6.98945 2.49902C7.33945 2.49902 7.68945 2.57402 8.00195 2.72402C8.32695 2.87402 8.61445 3.09902 8.83945 3.42402L11.7395 7.51152C11.9645 7.82402 12.127 8.11152 12.2395 8.38652C12.352 8.64902 12.4145 8.91152 12.4145 9.14902C12.4145 9.44902 12.327 9.74902 12.152 10.0365C11.9895 10.324 11.752 10.624 11.452 10.924L10.502 11.9115C10.3645 12.049 10.302 12.2115 10.302 12.4115C10.302 12.5115 10.3145 12.599 10.3395 12.699C10.377 12.799 10.4145 12.874 10.4395 12.949C10.6645 13.3615 11.052 13.899 11.602 14.549C12.1645 15.199 12.7645 15.8615 13.4145 16.524C14.0895 17.1865 14.7395 17.799 15.402 18.3615C16.052 18.9115 16.5895 19.2865 17.0145 19.5115C17.077 19.5365 17.152 19.574 17.2395 19.6115C17.3395 19.649 17.4395 19.6615 17.552 19.6615C17.7645 19.6615 17.927 19.5865 18.0645 19.449L19.0145 18.5115C19.327 18.199 19.627 17.9615 19.9145 17.8115C20.202 17.6365 20.4895 17.549 20.802 17.549C21.0395 17.549 21.2895 17.599 21.5645 17.7115C21.8395 17.824 22.127 17.9865 22.4395 18.199L26.577 21.1365C26.902 21.3615 27.127 21.624 27.2645 21.9365C27.3895 22.249 27.4645 22.5615 27.4645 22.9115Z" stroke="#C4C4C4" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M23.125 11.248C23.125 10.498 22.5375 9.34805 21.6625 8.41055C20.8625 7.54805 19.8 6.87305 18.75 6.87305" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.5 11.249C27.5 6.41152 23.5875 2.49902 18.75 2.49902" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-[#C4C4C4] text-xs md:text-xl font-medium">0121 272 9229 </p>
            </div>

            <div className="absolute md:relative flex w-[90%] md:w-[50%] h-2 bg-[#5C5C5C] rounded-full bottom-3">
              <div
                className={`bg-white  h-full rounded-full ${returnProgressBarWidth()}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 15C2.5 10.286 2.5 7.92893 3.96447 6.46447C5.42893 5 7.78595 5 12.5 5H17.5C22.214 5 24.5711 5 26.0355 6.46447C27.5 7.92893 27.5 10.286 27.5 15C27.5 19.714 27.5 22.0711 26.0355 23.5355C24.5711 25 22.214 25 17.5 25H12.5C7.78595 25 5.42893 25 3.96447 23.5355C2.5 22.0711 2.5 19.714 2.5 15Z" stroke="#C4C4C4" stroke-width="1.5" />
                <path d="M7.5 10L10.1986 12.2489C12.4944 14.162 13.6423 15.1186 15 15.1186C16.3577 15.1186 17.5056 14.162 19.8014 12.2488L22.5 10" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" />
              </svg>
              <p className="text-[#C4C4C4] text-xs md:text-xl font-medium"> info@do.co.uk</p>
            </div>

          </div>
          <div />
        </div>
      </section>
    </>
  );
};
export default Page;