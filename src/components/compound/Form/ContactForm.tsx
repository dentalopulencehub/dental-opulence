// import useAxios from "@/app/(root)/contact/hooks/useAxios";
import useAxios from "../../../../hooks/useAxios";
import { useState } from "react";

const ContactForm = ({handleStepChange}:{handleStepChange:(step: string) => void;}) => {
  const [formData, handleInputChange, handleSubmit] = useAxios();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const sent = await handleSubmit();
    if(sent ){
      handleStepChange('successForm')
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <section className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5">
        <div className="content w-full flex flex-col xl:flex-row gap-5 xl:gap-24">
          <div>
            <h1 className="bold text-lg md:text-[32px] text-white text-center md:text-left xl:text-[56px]">
            Input your personal info
            </h1>
          </div>

          <div className="thin text-xl w-full ">
            <form onSubmit={onSubmit} className="space-y-2 md:space-y-5 ">
              <div className="flex gap-2 sm:gap-5 flex-col md:flex-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="bg-[#41414159] text-white  border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className="bg-[#41414159] text-white  border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex gap-2 sm:gap-5 flex-col md:flex-row">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone [optional] "
                  className="bg-[#41414159] text-white  border border-[#454545] h-[56px] w-full p-2 sm:p-4  tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  className="bg-[#41414159] text-white  border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

            {/*   <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
                <input
                  type="date"
                  name="company"
                  placeholder="Company*"
                  className="bg-[#41414159]  border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm placeholder:text-[#494849]"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="deadline"
                  placeholder="Booking Time"
                  className="bg-[#41414159]  border border-[#454545] h-[56px] w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none placeholder:text-sm"
                  required
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </div> */}

              <div className="flex flex-col gap-2 sm:gap-5 items-end justify-center">
                <textarea
                  name="message"
                  placeholder="Your message here...."
                  className="bg-[#41414159] text-white border border-[#454545] w-full md:min-h-[100px] tracking-[0.3rem] rounded-md px-6 py-3 text-md focus:outline-none placeholder:text-sm"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="regular bg-transparent tracking-widest rounded-full text-white text-xs md:text-base border border-[#fff] w-[100px] h-[35px] md:w-[200px] md:h-[51px] flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
